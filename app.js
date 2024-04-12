const express = require('express');
const adminRoutes = require('./routers/admin');
const bodyParser = require('body-parser');
const app = express();
const shoprouter = require('./routers/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',adminRoutes);
app.use(shoprouter)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(3000);