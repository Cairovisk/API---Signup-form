
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {


    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    var options = {
        url: "https://us4.api.mailchimp.com/3.0/lists/503d9a8adc",
        method: "POST",

    };
    
    request(options, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode);
        }
    });
    
});



app.listen(3000, function() {
    console.log("Server is running on port 3000."); 
});

// 217a6e5a12dbef9b01bf41f6b96a7e30-us4

// api id request 503d9a8adc
