let Order = require('../models/order')


exports.createOrder = function (data, callback) {
    Order.create(data).then(success => {
        callback(null, success);
    }).catch(error => {
        callback(error, null);
    })
}

exports.updateOrder = function (data, callback) {
    Order.findOneAndUpdate({order_id:data.order_id}, {
        $set: {
            delivery_date: data.delivery_date
        }
    }).then(success => {
        callback(null, success);
    }).catch(error => {
        callback(error, null);
    })
}

exports.listOrder = function (data, callback) {
    Order.find({delivery_date:data.delivery_date}).then(success => {
        callback(null, success);
    }).catch(error => {
        callback(error, null);
    })
}
exports.searchOrder = function (data, callback) {
    Order.findOne({order_id:data.order_id}).then(success => {
        callback(null, success);
    }).catch(error => {
        callback(error, null);
    })
}

exports.deleteOrder = function (data, callback) {
    Order.remove({order_id:data.order_id}).then(success => {
        callback(null, success);
    }).catch(error => {
        callback(error, null);
    })
}