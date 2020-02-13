const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

const { PORT = 8000 } = process.env;
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	return res.json({
		success: true,
		message: 'keep playing around me'
	});
});

app.get('/konnektive/webhook/shipped', handleShippedFulfillmentWebhook);

async function handleShippedFulfillmentWebhook(req, res) {
	try {
		console.log('shipped');
		let dataStr = '';
		for (let el in req.query) {
			dataStr += `${el}: ${req.query[el]}`;
		}
		console.log(dataStr);
		if (orderStatus === 'COMPLETE' && fulfillmentStatus === 'SHIPPED') {
			console.log(`update aftership tracking with ${dataStr}`);
		}
		return res.status(200).json({
			success: true
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: err.message
		});
	}
}

app.get('/konnektive/webhook/cancelled', handleCancelledOrderWebhook);

async function handleCancelledOrderWebhook(req, res) {
	try {
    console.log('cancelled');
    let dataStr = '';
    for (let el in req.query){
      dataStr += `${el}: ${req.query[el]}`
    }
		console.log(
			`order cancelled with ${dataStr}`
		);
		return res.status(200).json({
			success: true
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: err.message
		});
	}
}
app.get('/konnektive/webhook/recurring', handleRecurringFulfillmentWebhook);

async function handleRecurringFulfillmentWebhook(req, res) {
	try {
		console.log('recurring');

		let dataStr = '';
    for (let el in req.query){
      dataStr += `${el}: ${req.query[el]}`
    }
		console.log(
			`recurring order  with ${dataStr}`
		);
		return res.status(200).json({
			success: true
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: err.message
		});
	}
}

app.get('/konnektive/webhook/sale', handleNewSaleWebhook);

async function handleNewSaleWebhook(req, res) {
	try {
		console.log('new sale');

		let dataStr = '';
		for (let el in req.query) {
			dataStr += `${el}: ${req.query[el]}`;
		}
		console.log(`new sale  with  ${dataStr}`);
		return res.status(200).json({
			success: true
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: err.message
		});
	}
}

app.listen(PORT, function() {
	console.log('Listening on port :', PORT);
});
