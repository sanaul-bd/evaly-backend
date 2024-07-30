const jwt = require("jsonwebtoken");
const jwt_sec_key = process.env.JWT_SECRET;

const isAuthenticate = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        return res.status(403).json({ message: "Token missing. login again" })
    }
    // 
    try {
        const decoded = jwt.verify(auth, jwt_sec_key)
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(403).json({message: "unAuthoriza Access. "})
    }
};

module.exports = isAuthenticate