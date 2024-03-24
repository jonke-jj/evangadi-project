// const dbConnection = require("../db/dbConfige");
// const bcrypt = require("bcrypt");
// const { StatusCodes } = require("http-status-codes");
// const jwt = require('jsonwebtoken')

// // const jwt = require("jsonwebtoken");
// // require("dotenv").config();

// async function register(req, res) {
// const { username, firstname, lastname, email, password } = req.body;

// if (!username || !firstname || !lastname || !email || !password) {
//     return res
//     .status(StatusCodes.BAD_REQUEST)
//     .json({ msg: "Please provide all required fields" });
//   } // Removed extraneous comma here

// try {
//     const [user] = await dbConnection.query(
//     "SELECT username, userid FROM users WHERE username = ? OR email = ?",
//     [username, email]
//     );
//     if (user.length > 0) {
//     return res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ msg: "User already exists" });
//     }
//     if (password.length <= 8) {
//     return res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ msg: "Password must be at least 8 characters" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     await dbConnection.query(
//     "INSERT INTO users (username, firstname, lastname, email, password) VALUES (?,?,?,?,?)",
//     [username, firstname, lastname, email, hashedPassword]
//     );
//     return res.status(StatusCodes.CREATED).json({ msg: "User registered" });
// } catch (error) {
//     console.error(error.message);
//     return res
//     .status(StatusCodes.INTERNAL_SERVER_ERROR)
//     .json({ msg: "Something went wrong, try again later!" });
// }
// }

// async function login(req, res) {
// const { email, password } = req.body;

// if (!email || !password) {
//     return res
//     .status(StatusCodes.BAD_REQUEST)
//     .json({ msg: "Please enter all required fields" });
// }

// try {
//     const [user] = await dbConnection.query(
//     "SELECT username, userid, password FROM users WHERE email = ?",
//     [email]
//     );

//     if (user.length === 0 ||
//     !(await bcrypt.compare(password, user[0].password))
//     ) {
//     return res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ msg: "Invalid credentials" });
//     }

//     const { username, userid } = user[0];
//     const token = jwt.sign({ username, userid }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//     });

//     return res
//       .status(StatusCodes.OK)
//       .json({ msg: "User login successful", token });
//   } catch (error) {
//     console.error(error.message);
//     return res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ msg: "Something went wrong, try again later!" });
//   }
// }

// async function checkUser(req, res) {
//   const username = req.body.username;
//   const userid = req.body.userid;
//   res.status(StatusCodes.OK).json({ msg: "valid user", username, userid });
// }

// module.exports = { register, login, checkUser };

































const dbConnection = require("../db/dbConfige");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const {StatusCodes} = require('http-status-codes');

async function register(req, res) {
    const { username, firstname, lastname, email, password } = req.body;
    if (!username || !firstname || !lastname || !email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "please provide all required fields" })
    }

try {
    const [user] = await dbConnection.query("select username,userid from users where  username = ? or email =? ", [username, email])
    if (user.length > 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "user already existed" })
    }
    if (password.length <= 8) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "password must be at least 8 characters" })
    }
    const salt = await bcrypt.genSalt(10)

    const hashedpassword = await bcrypt.hash(password, salt);

    await dbConnection.query("INSERT INTO users (username, firstname, lastname, email, password) VALUES (?,?,?,?,?) ", [username, firstname, lastname, email, hashedpassword]
    );
    return res.status(StatusCodes.CREATED).json({ msg: "user register" });

} catch (error) { 
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "something went wrong, try again later!" })
}
}
async function login(req, res) {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "please enter all required fields" });
    }

    try {
        const [user] = await dbConnection.query("SELECT username, userid, password from users WHERE email = ? ", [email]
        );

    if (user.length == 0)
        
        {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Invalid credentials" });
        }
        const username = user[0].username
        const userid = user[0].userid;
        const token = jwt.sign({ username, userid }, process.env.JWt_SECRET, { expiresIn: "1d"})

        return res.status(StatusCodes.OK).json({ msg: "user login successful", token });
    

    } catch (error) {
        console.log(error.message)
        return res.status(StatusCodes.INTERNAL_SEREVR_ERROR).json({ msg: "something went worng,try again later!"})
    }
}
async function checkUser(req, res) {
    const username = req.user.username
    const userid = req.user.userid
    res.status(StatusCodes.OK).json({ msg: "valid user", username, userid})
    
}
module.exports = {register, login, checkUser}