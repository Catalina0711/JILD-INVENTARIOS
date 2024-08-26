const express = require('express');
const app = express();
const mongoose = require("mongoose");
//importar rita de usuario
const userRoutes = require("./routes/user");

require("dotenv").config();

const port = process.env.port || 9000;
app.listen(port, () => console.log('servidor ok',port));


//middleware
app.use(express.json());
app.use('/api',userRoutes);



//routes

app.get("/",(rep,res)=> {
    res.send("Api en construción")
});

//conexion a la base de datos
mongoose.connect(process.env.BDMONGO_URI)
.then(() => console.log("conexion establecida"))
.catch((error)=> console.log(error));