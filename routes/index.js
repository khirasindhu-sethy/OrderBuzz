var express = require('express');
var router = express.Router();
const orderService = require('../services/orderService')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Buzzboard Order API Services'
  });
});

router.post('/create', (req, res) => {
  orderService.createOrder(req.body, (err, result) => {
    res.send(err ? err : result);
  })
})
router.put('/update', (req, res) => {
  orderService.updateOrder(req.body, (err, result) => {
    res.send(err ? err : result);
  })
})
router.post('/list', (req, res) => {
 req.body.delivery_date=new Date(req.body.delivery_date)
  orderService.listOrder(req.body, (err, result) => {
    res.send(err ? err : result);
  })
})
router.post('/search', (req, res) => {
  orderService.searchOrder(req.body, (err, result) => {
    res.send(err ? err : result);
  })
})
router.delete('/delete', (req, res) => {

  orderService.deleteOrder(req.body, (err, result) => {
    res.send(err ? err : result);
  })
})

module.exports = router;
