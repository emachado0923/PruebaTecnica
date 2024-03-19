const {Schema,model} = require('mongoose');


const productSchema = new Schema(
    {
    
    nombre:String,
    modelo:String,
    almacenamiento:String,
    createAt:Date,
    updateAt:Date
},
{
    timestamps:true,
    versionKey:false
}
);
module.exports=model("Product",productSchema);