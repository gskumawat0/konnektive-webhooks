const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");


const app = express();

const { PORT = 8000 } = process.env;
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "keep playing around me"
  });
});




app.get('/konnektive/webhook/shipped', handleFulfillmentStatusWebhook);

async function handleFulfillmentStatusWebhook(req, res) {
  try {
    console.log('cancelled')

    console.log(req.query)
    let { orderId, trackingNumber, customerId, campaignId, orderStatus, fulfillmentStatus } = req.query;
    if (orderStatus === "COMPLETE" && fulfillmentStatus === 'SHIPPED') {
      console.log(`update aftership tracking with trackingNumber: ${trackingNumber}, orderId: ${orderId}, campaignId: ${campaignId} and customerId: ${customerId}`)
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

app.get('/konnektive/webhook/cancelled', handleFulfillmentStatusWebhook);

async function handleFulfillmentStatusWebhook(req, res) {
  try {
    console.log('cancelled')
    console.log(req.query)
    let { orderId, trackingNumber, customerId, campaignId, orderStatus, fulfillmentStatus } = req.query;
    if (orderStatus === "COMPLETE" && fulfillmentStatus === 'SHIPPED') {
      console.log(`update aftership tracking with trackingNumber: ${trackingNumber}, orderId: ${orderId}, campaignId: ${campaignId} and customerId: ${customerId}`)
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
app.get('/konnektive/webhook/recurring', handleFulfillmentStatusWebhook);

async function handleFulfillmentStatusWebhook(req, res) {
  try {
    console.log('cancelled')

    console.log(req.query)
    let { orderId, trackingNumber, customerId, campaignId, orderStatus, fulfillmentStatus } = req.query;
    if (orderStatus === "COMPLETE" && fulfillmentStatus === 'SHIPPED') {
      console.log(`update aftership tracking with trackingNumber: ${trackingNumber}, orderId: ${orderId}, campaignId: ${campaignId} and customerId: ${customerId}`)
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

app.get('/konnektive/webhook/sale', handleFulfillmentStatusWebhook);

async function handleFulfillmentStatusWebhook(req, res) {
  try {
    console.log('new sale')

    console.log(req.query)
    let { orderId, trackingNumber, customerId, campaignId, orderStatus, fulfillmentStatus } = req.query;
    if (orderStatus === "COMPLETE" && fulfillmentStatus === 'SHIPPED') {
      console.log(`update aftership tracking with trackingNumber: ${trackingNumber}, orderId: ${orderId}, campaignId: ${campaignId} and customerId: ${customerId}`)
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

app.listen(PORT, function() {
  console.log("Listening on port :", PORT);
});