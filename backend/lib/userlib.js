const usermodel=require('../models/usermodel')
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