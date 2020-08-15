const mongoose=require('mongoose')
var User=new mongoose.Schema({
      name:String,
      email:{type:String,unique:true,required:true},
      password:{type:String,required:true},
      username:{type:String,unique:true},
      score:Number,
      loggedin:{type:Boolean,default:false}
})
module.exports=mongoose.model('user',User)