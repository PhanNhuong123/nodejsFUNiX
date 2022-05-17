const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path')
const adminData = require('./admin')

router.get('/',(req, res , next) => {
  console.log(adminData.product)
  const products = adminData.product
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
  res.render('shop',{pros : products , pageTitle: 'Shop' , path: '/', hasProduct : products.length > 0})
  
});

module.exports = router