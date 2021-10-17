const Users = require('../users/users-model');
const { findBy } = require('../users/');
const { JWT_SECRET } = require("../secrets");
const jwt = require('jsonwebtoken');

const restricted = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                next({
                    status: 401,
                    message: `Token invalid`
                });
            } else {
                req.decodedJwt = decoded;
                next();
            }
        });
    } else {
        next({
            status: 401,
            message: 'Token required'
        });
    }
};

function validateUserBody(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(422).json({ message: 'username and password required' });
    } else {
        next();
    }
}

async function checkUserNameFree(req, res, next) {
    try {
        const users = await Users.findBy({ username: req.body.username });
        if (!users.length) {
            next();
        }
        else {
            next({ message: "username taken", status: 422 });
        }
    } catch (err) {
        next(err);
    }
}

async function validateCredentials(req, res, next) {
    try {
        const { username } = req.body;
        const user = await findBy({ username: username });
        if (user.length) {
            req.user = user[0];
            next();
        } else {
            next({
                status: 401,
                message: "invalid credentials1"
            });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    restricted,
    validateUserBody,
    checkUserNameFree,
    validateCredentials
}