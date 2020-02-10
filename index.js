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


app.post('/konnektive/webhook/shipping', handleFulfillmentStatusWebhook);

async function handleFulfillmentStatusWebhook(req, res) {
  try {
    console.log(new Date().toLocaleTimeString());
    console.log("requesst arrived");
    console.log("orders body \n");
    console.log(JSON.parse(JSON.stringify(req.body)));
    console.log("orders headers \n");
    console.log(JSON.parse(JSON.stringify(req.headers)));
    console.log("orders query parameters \n");
    console.log(JSON.parse(JSON.stringify(req.query)));
    let { fulfillmentStatus, orderStatus } = req.body;
    console.log(fulfillmentStatus, orderStatus);
    if (fulfillmentStatus === "shipped") {
      //execute your code here
    }
    return res.status(200).send("ok");
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

app.get('/konnektive/webhook/shipping', handleGetFulfillmentStatusWebhook);

async function handleGetFulfillmentStatusWebhook(req, res) {
  try {
    console.log(new Date().toLocaleTimeString());
    console.log("requesst arrived");
    console.log("orders body \n");
    console.log(JSON.parse(JSON.stringify(req.body)));
    console.log("orders headers \n");
    console.log(JSON.parse(JSON.stringify(req.headers)));
    console.log("orders query parameters \n");
    console.log(JSON.parse(JSON.stringify(req.query)));
    let { fulfillmentStatus, orderStatus } = req.body;
    console.log(fulfillmentStatus, orderStatus);
    if (fulfillmentStatus === "shipped") {
      //execute your code here
    }
    return res.status(200).send("ok");
  } catch (err) {
    return res.status(500).send(err.message);
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