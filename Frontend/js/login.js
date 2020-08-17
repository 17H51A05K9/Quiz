var id
$('#login').click(async()=>{
    var userdata={
        username:document.getElementById('username').value,
        password:document.getElementById('password').value
    }
    await $.post('/logindata',userdata,async(data,status)=>{
                if(status=="success")
                {
                    console.log(data)
                     if(data=="user not found")
                     {
                        $('#show').html("Ivalid Credentials")
                        window.setTimeout(()=>{
                           window.location.reload()
                        },2000)
                     }
                     else
                     {
                        localStorage.setItem("id",data._id)
                        window.location.replace('/dashboard');
                     }
                }
    })
})
