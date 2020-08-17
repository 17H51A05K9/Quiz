$('.signupbtn').click(async()=>{
    var userdata={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        username:document.getElementById('username').value
    }
    await $.post('/signupdata',userdata,(data,status)=>{
            if(status=="success")
            {
              if(data.name!="MongoError")
              {
                window.location.replace('/')
              }
            }
    })
})