var userid={
    id:localStorage.getItem("id")
}
$('#logout').click(async()=>{
    
   await $.post('/logout',userid,(data,status)=>{
        if(status=="success")
        {
            console.log(data)
            window.location.replace('/')
        }
   })
})
$('#GetAllProblems').click(async()=>{
      await $.get('/allmyproblems',userid,(data,status)=>{
               if(status=="success")
               {
                  
                window.location.replace('/userproblems')
               }
       })
})