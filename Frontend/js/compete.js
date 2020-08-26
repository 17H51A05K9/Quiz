$('#navbardrop').html(localStorage.getItem("username"))
var userid={
    id:localStorage.getItem("id")
}
$('#logout').click(async()=>{
    
    await $.post('/logout',userid,(data,status)=>{
         if(status=="success")
         {
            // console.log(data)
             window.location.replace('/')
         }
    })
 })