const mongoose = require('mongoose');
const CitySchema = require('../model/cityModel');
const express = require('express');
const router = express.Router();
const app = express;

router.get('/city', async (req, res, next) => {
    const shipingInfo = await CitySchema.find().select('-_id startingPoint endPoint costOfDelivery');
    res.send(JSON.stringify(shipingInfo));
})

module.exports = router;