

// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

// id pass
const userName = "devconfigbd";
const userPass = "5ayG31wDQllbwvJN";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
// bodyparser and express.json both are same
app.use(bodyParser.json());
app.use(express.json())

// MongoDB Connection
const uri = `mongodb+srv://devconfigbd:${userPass}@cluster0.omif32i.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // collection   //todo db name somthing wrong . carefully

        const postsCollection = client.db("Evaly-Databse").collection("Posts");

        // operations 
        app.get('/posts', async (req, res)=> {
            const cursor = postsCollection.find();
            const postData = await cursor.toArray();
            res.send(postData)
        })














        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        app.get("/", (req, res) => {
            res.send(`Server is runnig on 👌👌👌 ${port} port 👌👌👌 `)
        })

        app.listen(port, () => {
            console.log(`Server is running on 👌👌👌 ::> http://localhost:${port} 👌👌👌`);
        });
    } finally {
        // Ensure that the client will close when you finish/error
        // await client.close();
    }
}

run().catch(console.dir);
