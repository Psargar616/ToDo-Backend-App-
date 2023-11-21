const express = require("express")
const router = express.Router()

// fetch controller

const {createToDo} = require("../controllers/createToDo")

// route and controller mapping
router.post("/createToDo" , createToDo)

module.exports = router;