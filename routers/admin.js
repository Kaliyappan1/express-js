const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
})
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.send('order added');

})

module.exports = router;