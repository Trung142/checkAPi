const express = require("express");
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser')
const connection = require("./src/config/sequelizeConnect");
const resfullapi = require("./src/router/restfullApi");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const dotenv = require("dotenv").config();
const port = dotenv.parsed.PORT;
// viewengin(app);
connection();
resfullapi(app);
app.listen(8080, () => {
	console.log(`Example app listening successfuly!`);
});