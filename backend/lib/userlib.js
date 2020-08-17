const usermodel=require('../models/usermodel')
const challengemodel=require('../models/challengemodel')
module.exports.find=async(data)=>{
     var user=await usermodel.findOne({email:data})
     return user
}
module.exports.checklogin=async(data)=>{
     var username=await usermodel.findOne({username:data.username})
     if(username)
     {
          if(data.password==username.password)
          {
               return username;
          }
     }
     return null
}
module.exports.logout=async(data)=>{
     var user=await usermodel.findById({_id:data})
     return user
}
module.exports.checkproblem=async(data)=>{
     var user=await challengemodel.findOne({description:data.description})
     return user
}