const express = require('express')
const bodyParser = require('body-parser');
const { connection } = require("./db")
const cors = require('cors');


const app = express()

app.use(cors());

app.use(bodyParser.json());







app.listen(4500, async () => {
    try {
        await connection
        console.log("Connected to the db")
    } catch (err) {
        console.log("Connection to db failed")
        console.log(err)
    }
    console.log("Running the server at 4500")
})
