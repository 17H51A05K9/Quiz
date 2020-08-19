var userid={
    id:localStorage.getItem("id")
}
$('#navbardrop').html(localStorage.getItem("username"))
$('#save').click(async()=>{
    
    var problem={
        description:document.getElementById('problemdescription').value,
        option1:document.getElementById('op1').value,
        option2:document.getElementById('op2').value,
        option3:document.getElementById('op3').value,
        option4:document.getElementById('op4').value,
        difficulty:document.getElementById('difficulty').value,
        topic:document.getElementById('top').value,
        correctanswer:document.getElementById('ca').value,
        author:localStorage.getItem("id").toString()
    }
    
   // console.log(problem)
    await $.post('/myproblems',problem,(data,status)=>{
         if(status=="success")
         {
            // console.log(data)
             window.location.replace('/userproblems')
         }
    })
})
$('#logout').click(async()=>{
    
    await $.post('/logout',userid,(data,status)=>{
         if(status=="success")
         {
             console.log(data)
             window.location.replace('/')
         }
    })
 })