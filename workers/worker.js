#!/usr/bin/env node

const queue_name = 'nodejs';
var amqp = require('amqplib/callback_api');
var io = require('../modules/socket');

amqp.connect('amqp://172.18.0.1', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        channel.assertQueue(queue_name, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue_name);

        channel.consume(queue_name, function(msg) {
            var message = msg.content.toString();
            console.log(" [x] Received %s", message);

            io.socket.emit("mychannel", {message: message});
        }, {
            noAck: true
        });
    });
});
