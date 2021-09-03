const express = require ("express");

const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")


const app = express();
let items=["Classes", "Code", "Explore"];
let codeItems=[]

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
   
     let day = date.getDate()

    res.render("list", {listTitle: day, newListItem: items});
  
 
})
app.post("/", function(req, res){
    let item= req.body.newItem;
    if(req.body.list==="Code List"){
        codeItems.push(item)
        res.redirect("/Code")
    }else{
        items.push(item);
        res.redirect("/");
    }
  
  
})
app.get("/Code", function(req, res){
    res.render("list", {listTitle: "Code List", newListItem: codeItems}) 

    
  
})
app.get("/about", function(req, res){
    res.render("about")
})



app.listen(3000,function(){
    console.log("Server is running on port 3000.")
})