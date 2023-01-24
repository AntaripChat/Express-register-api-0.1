const express = require('express');
const bodyParser = require('body-parser');
const router = require('./route');
const app = express();
app.use(bodyParser.json());
app.use('/',router)

app.listen(5000)