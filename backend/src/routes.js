const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions',SessionController.store);

//caso fosse mais de uma imagem poderia ser utiliado upload.array()
routes.post('/spots',upload.single('thumbnail'),SpotController.store);
routes.get('/spots',SpotController.index);
routes.post('/spots/:spot_id/bookings',BookingController.store);

routes.get('/dashboard',DashboardController.show);

module.exports = routes;