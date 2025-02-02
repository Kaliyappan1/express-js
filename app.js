const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routers/admin');
const shoprouter = require('./routers/shop');

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',adminRoutes);
app.use(shoprouter)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(4000);