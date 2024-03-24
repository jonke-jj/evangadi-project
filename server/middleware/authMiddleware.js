const { StatusCodes } = require('http-status-codes')
const jwt = require ("jsonwebtoken")
async function authMiddleware (req, res, next){

    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ msg: "Authentication invalid" });
    }
    if (!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Authentication invalid' })
    }
    const token = authHeader.split(' ')[1]
    console.log(token)
    console.log(authHeader)
    
    try {
        const { username, userid } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { username, userid };
    next();
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: 'Authentication invalid123' })
    }
}
module.exports = authMiddleware