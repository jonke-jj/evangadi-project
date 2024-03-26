require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 5500;

// const cors = require("cors");
// app.use(cors({origin:true}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
})

//db connection
const dbconnection = require("./db/dbConfige");

//use routes middleware file imported
const useRoutes = require("./routes/userRoute");

//question routes middleware file imported
const questionRoutes = require("./routes/questionRoute");

//answer routes middleware file imported
const answerRoutes = require("./routes/answerRoute");

//authentication middleware file
const authMiddleware = require("./middleware/authMiddleware");

//json middleware to extract json data
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "success",
  });
});

//use routes middleware
app.use("/api/users", useRoutes);

//question routes middleware
app.use("/api/questions", authMiddleware, questionRoutes);

//answer routes middleware
app.use("/api/answers", authMiddleware, answerRoutes);

const start = async () => {
  try {
    const result = await dbconnection.execute("select 'test' ");
    await app.listen(PORT);
    console.log("database connection established");
    console.log(`listening on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
};

start();
