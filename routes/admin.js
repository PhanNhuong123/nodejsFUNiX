const express = require("express");
const path = require('path')
const router = express.Router();
const rootDir = require('../util/path')

const product = []

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  res.render('add-product' , {  title: 'Add Product', pageTitle: 'Add Products'})
});

router.post("/add-product", (req, res, next) => {
  res.redirect("/");
  product.push({title : req.body.title})
});

exports.router = router
exports.product = product