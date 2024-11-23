const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

//create connection from database
const mysql = require("mysql");
const dbconnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cms'
});


app.get("/", function(req, res){
    var sql = "select * from cms";
    dbconnect.query(sql, function (error, rows, fields) {
        var jsonData = JSON.stringify(rows);// array to json
        res.write(jsonData);
        res.end();
    })
});

app.post("/save", function (req, res) {

    var tittle = req.body.tittle;
	var url = req.body.url;
    var email = req.body.email;
    var images = req.body.images;
    var address = req.body.address;
    var comments = req.body.comments;
	
    
    var sql = "insert into cms(tittle,url,images,email,address,comments) values('" + tittle + "', '" + url + "', '" + images + "','" + email + "','" + address + "','" + comments + "')";

    dbconnect.query(sql, function (error, rows, fields) {

        res.write("Record Added Successfully");
        res.end();
    })
});

app.post("/update", function(req, res){
    var tittle = req.body.tittle;
	var url = req.body.url;
    var email = req.body.email;
    var images = req.body.images;
    var address = req.body.address;
    var comments = req.body.comments;
	var id = req.body.id;
	
    var sql="update cms set tittle='"+tittle+"', url='"+url+"',images='"+images+"', address='"+phone+"' , images='"+images+"'where cmsid="+id;

    dbconnect.query(sql, function(error, rows, fields){
       res.write("Data Updated Successfully");
       res.end();
      })
 })

 app.post("/delete", function (req, res) {
    var id = req.body.id;
    var sql = "delete from cms where cms=" + id;
    dbconnect.query(sql, function (error, rows, fields) {
        res.write("Record Deleted Successfully");
        res.end();
    })
});


app.listen(8080, function () {
	
	console.log('Server Started on Port:8080!');

});