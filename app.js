const express = require('express')
const bodyparser = require('body-parser')
const route = require('./routes/routes')
const froute = require('./routes/Food_Routes')
const db = require('./database/db')
const productRoute=require('./routes/productRoute')
const broute = require('./routes/bookingRoutes')
const cors = require('cors');
const app = express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())
app.use('/images', express.static(__dirname + '/images'));
app.use(cors())
app.use(route)
app.use(productRoute);
app.use(broute);
app.use(froute);
app.listen(5000)