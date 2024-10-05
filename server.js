const express = require("express")
const router = require("./router/route.js")

const app = express()

app.use(router)

app.listen(4000, () => {
    console.log("server is running!!!")
})