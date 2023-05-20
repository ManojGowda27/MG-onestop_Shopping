const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_Sec, (err, user) => {
            if (err) res.status(403).json("Token is invalid");
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("User not authentiicated");
    }
};

const verifyTokenandAuthorization = (req, res, next) => {
    verifyToken (req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("User is not allowed to perform this action")
        }
    })
}

const verifyTokenandAdmin = (req, res, next) => {
    verifyToken (req, res, () => {
        if(req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("User is not allowed to perform this action")
        }
    })
}

module.exports = {verifyToken, verifyTokenandAuthorization, verifyTokenandAdmin};