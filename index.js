import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;

// app.use(morgan("tiny"));

// app.use((req,res,next)=>{
//     console.log("Request method:",req.method);
//     next();
// });


function logger(req,res,next){
    console.log("Request Method:",req.method);
    console.log("Request Url:",req.url);
    next();
};

app.use(logger)

app.get("/",(req,res) =>{
    res.send("hellow");
});
app.listen(port,() =>{
    console.log('Listening on port ${port}');
});