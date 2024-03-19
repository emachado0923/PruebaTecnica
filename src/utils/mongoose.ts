const mongoose=require("mongoose");

mongoose
.connect("mongodb://127.0.0.1/productoCRUD")
.then(()=>console.log("MongoDB Connected..."))
.catch((err: any)=>console.log(err));