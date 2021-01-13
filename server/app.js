var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios = require('axios');
const cors = require('cors');
const SECRET_KEY = require('./secret.js');

var app = express();
const port = 8080;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.set('view engine', 'html');

app.get('/api/location', async (req, res) => {
  try {
    let city = req.query.city;
    let state = req.query.state;
    const url =  `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${SECRET_KEY.key}`;
    let {data} = await axios.get(url);
    if(data.status.code === 200) {
      if(data.results.length > 0) {
        const place = data.results[0];
        const lat = place.lat;
        const lng = place.lng;
        res.send(place);
      } else {
        res.status(200).send({msg: 'location not found'});
      }
    } else {
      res.status(500).send({msg:'internal error'})
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({msg:'internal error'})
  }
});

app.get('/api/weather', async (req, res) => {
  try {
    let {lat, lon} = req.query;
    const url =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${SECRET_KEY.key2}&units=imperial`;
    let {data} = await axios.get(url);
    res.send(data);
  } catch(err) {
    console.log(err);
    res.status(500).send({msg:'invalid'});
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
module.exports = app;
