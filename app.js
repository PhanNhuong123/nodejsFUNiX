const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')

const rootDir = require('./util/path')

const adminData = require("./routes/admin.js");
const shopRoutes = require('./routes/shop');
const exp = require("constants");

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminData.router);

app.use(shopRoutes)

app.use((req , res, next ) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(port);
