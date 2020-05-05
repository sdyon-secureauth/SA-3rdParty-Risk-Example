
var express = require("express");
var app = express();


app.get("/api/user/:username/risk", (req, res, next) => {
    if(req.params.username == "Bob") {
        //console.log(req.params);
        res.json({"riskScore": 95});
    }
    else {
        res.json({"riskScore": 0});
    }
   });



app.listen(process.env.PORT || 3000);

