const express = require('express')
const path = require('path');
const rootDir = require('../utilies/path')

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.send('order added');

})

module.exports = router;