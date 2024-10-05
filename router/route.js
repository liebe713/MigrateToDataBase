const express = require("express")
const {Module} = require("module")


const router = express.Router()

router.get("/home", (req, res) => {
    res.send("Welcome Users")
})

router.get("/about", (req, res) => {
    res.send("About Us")
})

router.get("/contact", (req, res) => {
    res.send("Contact Us")
})

module.exports = router