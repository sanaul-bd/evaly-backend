// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { signupValidation, loginValidation } = require('./middleware/AuthValidation');
const isAuthenticate = require('./middleware/Auth');
const saltRounds = 10;
// const code = process.env.BCRYPT_CODE;

// all route___ middleware___ 


// id pass
const userName = process.env.USER_NAME;
const userPass = process.env.USER_PASS;
const jwt_sec_key = process.env.JWT_SECRET;

const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(cors());
// bodyparser and express.json both are same
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json())

// MongoDB Connection
const uri = process.env.URI;
const client = new MongoClient(uri);


async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // collection   //todo db name somthing wrong . carefully

        const productsCollection = client.db("Evaly-Database").collection("products");
        const postsCollection = client.db("Evaly-Database").collection("posts");
        const photosCollection = client.db("Evaly-Database").collection("photos");
        const usersCollection = client.db("Evaly-Database").collection("users");
        // 
        const Users = require('./models/user.model');










        // !____________________middleware____________________
        // user exist or not 


        // * register ______ logIn
        app.post('/register', signupValidation, async (req, res) => {

            bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
                // Store hash in your password DB.
                const newUser = new Users({
                    email: req.body.email,
                    password: hash
                });

                const userExist = await usersCollection.findOne({ email: req.body.email })
                if (userExist) {
                    res.status(200).json({ message: "user allrady exist with the email" })
                }
                else {
                    try {
                        await usersCollection.insertOne(newUser)
                        res.status(201).json({ message: "user registerd", newUser })
                    } catch (error) {
                        res.status(500).json({ message: error.message })
                    }
                }

                console.log(newUser)
            });
        })


        app.post('/login', loginValidation, async (req, res) => {
            const userExist = await usersCollection.findOne({ email: req.body.email })
            console.log(` from login route Email: ${userExist.email}`)
            try {
                if (!userExist) {
                    return res.status(404).json({ message: 'User not found' });
                }
                // Load hash from your password DB.
                bcrypt.compare(req.body.password, userExist.password, function (err, result) {
                    if (result == true) {
                        // jwt_____ logic
                        const jwtToken = jwt.sign(
                            { email: userExist.email, _id: userExist._id },
                            jwt_sec_key,
                            { expiresIn: "24h" }
                        )
                        console.log("Token is here :",jwtToken)
                        res.status(200).json({
                            message: "villade user",
                            jwtToken,
                            email: userExist.email,
                        })


                    } else {
                        res.status(404).json({ message: "invillade password" })
                    }


                });
            } catch (error) {
                res.status(500).json({ message: error.message })
            }

        })

        // ^_____Product_Operations

        app.get('/products', async (req, res) => {
            const cursor = productsCollection.find();
            const products = await cursor.toArray();
            res.send(products)
        })




        // ^_____Posts_Operations
        app.get('/posts', async (req, res) => {
            const cursor = postsCollection.find();
            const posts = await cursor.toArray();
            res.send(posts)
        })


        // ^_____Photos_Operations
        app.get('/photos', async (req, res) => {
            const cursor = photosCollection.find();
            const photos = await cursor.toArray();
            res.send(photos)
        })


        // ^_____Users_Operations
        app.get('/users', isAuthenticate,  async (req, res) => {
            const cursor = usersCollection.find();
            const users = await cursor.toArray();
            res.status(200).json(users)
        })

















        // !________[Nothing Here]  :  Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Database Connected");

        app.get("/", (req, res) => {
            res.status(200).sendFile(__dirname + "/./Views/index.html")
        })

        //  test apis
        app.get('/ping', async (req, res) => {
            res.status(200).send("Pong")
        })



    } finally {
        // Ensure that the client will close when you finish/error
        // await client.close();
    }
}
app.listen(port, () => {
    console.log(`Server is running on address is http://localhost:${port} 👌`);
});

run().catch(console.dir);
