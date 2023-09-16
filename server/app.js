require("dotenv").config();
const express = require("express")
const app = express();
const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}));

const routes = require("./routes")
app.use(routes)

app.listen(port, () => {
    console.log(`App Listening port ${port}`)
})