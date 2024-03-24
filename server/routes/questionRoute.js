const express = require('express')
const router = express.Router()
const { postQuestion, allQuestion } = require('../Controler/questionController')


router.post("/postquestions", postQuestion)

router.get("/all-questions", allQuestion)

module.exports = router