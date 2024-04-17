
const express = require('express')    //taking express from express package
const mongoosedb = require('mongoose')   //taking mongoose for DB connection

const app = express()

app.get(
    "/",    //as soon as url get / in it 
    (req,res) => {
        res.send("Hello")
    }

)

console.log(1111111);   

app.listen(
    5000,
    () => console.log("Backend is running")
)   //app listening on port 5000

mongoosedb.connect("mongodb://127.0.0.1:27017/watharedb")
.then(
    (resolve) => {
        console.log("Mongodb Connection Established")
        
        }
    ).catch(
        (reject) => {
            console.log("Unable to connect DB")
        }   
)






// const express = require('express');
// // const mongoose = require('mongoose');

// const app = express();

// app.get(
//    "/",
//     (req, res) => {
//     res.send("Hello");
// });

// mongoose.connect("mongodb://localhost:27017/wathareDB")
//     .then(() => {
//         console.log("Mongodb Connection Established");
//         app.listen(5000, () => {
//             console.log("Backend is running on port 5000");
//         });
//     })
//     .catch((error) => {
//         console.error("Error connecting to MongoDB:", error);
//     });

