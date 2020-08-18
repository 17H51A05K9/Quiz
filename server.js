const express=require('express')
const config=require('./backend/config/config')
const db=require('./backend/db/connect')
const bodyParser=require('body-parser')
const userlib=require('./backend/lib/userlib')
const usermodel=require('./backend/models/usermodel')
const challengemodel=require('./backend/models/challengemodel')
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
app.post('/logout',async(req,res)=>{
 //  console.log(req.body.id)
    try{
      //  console.log(req.body)
        var userdata=await userlib.logout(req.body.id)
            userdata.loggedin=false;
            var savedata=new usermodel(userdata)
            await savedata.save().then((data)=>{
                localStorage.removeItem("id")
                 res.send(data)
            }).catch(e=>{
                res.send(e);
            })
    }catch(e)
    {
        console.log(e)
    }
})
app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/Frontend/html/signup.html')
})
app.get('/userproblems',(req,res)=>{
    res.sendFile(__dirname+'/Frontend/html/userproblems.html')
})
app.get('/dashboard',(req,res)=>{
   res.sendFile(__dirname+'/Frontend/html/dashboard.html')
})
app.get('/problem',(req,res)=>{
    res.sendFile(__dirname+'/Frontend/html/problem.html')
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
app.post('/myproblems',async(req,res)=>{
   // console.log(req.body)
  // console.log(req.body.author)
      try{
          var problem=await userlib.checkproblem(req.body)
          var saveproblem=new challengemodel(req.body);
         await  saveproblem.save().then((data)=>{
             console.log(data)
              res.send(data);
          }).catch(e=>{
              console.log(e);
              res.send(e);
          })
      }catch(e)
      {
          console.log(e)
      }
})
app.get('/allmyproblems',async(req,res)=>{
      try{
          var problems=await challengemodel.find(req.body.id)
          console.log(problems);
          res.send(problems);
      }
      catch(e)
      {
          console.log(e);
      }
})
app.listen(config.port,(err)=>{
    if(err)
    console.log('disconnected')
    else
    console.log('connected')
})