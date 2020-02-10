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




app.get('/konnektive/webhook/shipping', handleFulfillmentStatusWebhook);

async function handleFulfillmentStatusWebhook(req, res) {
  try {
    console.log(req.query)
    let { orderId, orderStatus, fulfillmentStatus } = req.query;
    if (orderStatus === "completed" && fulfillmentStatus === 'shipped') {
      //execute your code here
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

app.post("/github", githubIssuesWebhooks);

async function githubIssuesWebhooks(req, res){
  try {
    console.log("github webhooks body");
    console.log(req.body);
    console.log("github webhooks headers");
    console.log(req.headers);
    return res.send("OK");
  } catch (err) {
    return res.status(500).send(err.message);
  }
}


app.listen(PORT, function() {
  console.log("Listening on port :", PORT);
});