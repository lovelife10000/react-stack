var express = require('express')
var app = express()
var cors = require('cors')
const json =require('./db.json');
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}))

app.post('/admin/auth/local', function (req, res) {
    res.send(json)
})

app.listen(9001)