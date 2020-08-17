const mongoose=require('mongoose')
var problem=new mongoose.Schema({
    description:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,
    difficulty:String,
    topic:String,
    correctanswer:String,
    author:{type:String,required:true}
})
module.exports=mongoose.model('challenges',problem);