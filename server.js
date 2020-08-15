const express=require('express')
const config=require('./backend/config/config')
const db=require('./backend/db/connect')
const bodyParser=require('body-parser')
const userlib=require('./backend/lib/userlib')
const usermodel=require('./backend/models/usermodel')
var app=express()
db.connect
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname+'/Frontend'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Frontend/html/index.html')
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/Frontend/html/login.html')
})
app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/Frontend/html/signup.html')
})
app.post('/logindata',async(req,res)=>{
    try{ 
     var userdata=await userlib.checklogin(req.body)
     if(userdata){
         userdata.loggedin=true;
         var logged=new usermodel(userdata)
         logged.save().then((data)=>{
             console.log(data)
            res.send(data);
         }).catch(err=>{
             console.log(err);
             res.send(err);
         })
        }
        else
        res.send("user not found")
    }
    catch(e)
    {
        res.send(e);
    }
})
app.post('/signupdata',async(req,res)=>{
     var userdata=await userlib.find(req.body.email);
     //if(userdata==null)
     {
         var saveuserdata=new usermodel(req.body);
         await  saveuserdata.save().then((data)=>{
             console.log(data)
              res.send(data);
          }).catch(err=>{
              res.send(err)
          })
     }
})
app.listen(config.port,(err)=>{
    if(err)
    console.log('disconnected')
    else
    console.log('connected')
})