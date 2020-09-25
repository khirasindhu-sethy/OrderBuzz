const mongoose = require('mongoose');
const orderModel = new mongoose.Schema({
    order_id: {
        type: Number,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    order_date: {
        type: Date,
        required: true
    },
    delivery_date: {
        type: Date,
        required: true
    }
})

var Order = mongoose.model('Order', orderModel)
module.exports = Order;