const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<h1>Add Product</h1><form action="/store-product" method="post" ><input type="text" name="title" /><input type="submit" value="submit"/>');
})
router.post('/store-product', (req, res, next) => {
    console.log(req.body);
    res.send('order added');

})

module.exports = router;