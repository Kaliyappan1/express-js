const express = require('express');
const adminRoutes = require('./routers/admin');
const bodyParser = require('body-parser');
const app = express();
const shoprouter = require('./routers/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoutes);
app.use(shoprouter)
app.use((req, res, next) => {
    res.status('404 page not found');
})


app.listen(3000);