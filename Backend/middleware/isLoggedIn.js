import jwt from 'jsonwebtoken';

const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Authentication required" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId; // Store user ID in the request object

        next(); // Pass control to the next middleware

    } catch (err) {
        if (err.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid token" });
        } else if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired" });
        } else {
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
};

module.exports = isLoggedIn;
