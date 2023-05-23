const express = require("express") ;
const bodyParser = require("body-parser") ; 
const app = express() ; 

app.use("view engine" ,"ejs") ; 


// 1 for monday
app.get("/", function(req, res){
    var today = new Date() ;
    var currentDay = today.getDay();
    if(currentDay ===  6 || currentDay ===7){
        res.write("<h1> Yay it's the weekend</h1>");
    }
    else {
        res.sendFile(__dirname + "/index.html") ;
    }
});

app.listen(3000, function(){
    console.log("server started on port 3000") ; 
});



