const express = require("express");
const app = express();
const route = require("./src/route.js")
const port = 3000;
import { engine } from 'express-handlebars';
app.engine('handlebars', engine());
app.set('view engine', 'hbs');
app.listen(port);
app.use(route)
