const mongoose=require("mongoose");

const ZooSchema=new mongoose.Schema({
  name:String,
  specie:String,
  family:String,
  nutrition:String,
  habitat:String,
  longevity:Number,
  location:String
});

module.exports=mongoose.model("animals",ZooSchema);
