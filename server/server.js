const express = require ("express");
const Joi =require ('joi');
const {validatesignup} = require ("./validator")

const app = express();

app.use(express.json());

app.post("/schema",(req,res) => {
    const{error} = validatesignup(req.body);
    const{value} = validatesignup(req.body);

    if(error){
        
        let newArr = error.details.map((x) => {
            let y = x.message;
            return y;
          });
          return res.send(newArr)
    }

    res.send("data send successfully")
    console.log(value);
});
module.exports = app



app.listen(3000,()=>{
    console.log("server running on port 3000");
})