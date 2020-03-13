const express = require('express');
const app = express();
const port = process.env.port || 3000;
const bodyParser = require('body-parser');


const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var defaultController = require('./Controller/defaultController')();
app.use("/", defaultController);


app.listen(3000, () => console.log('Server started on port 3000'));