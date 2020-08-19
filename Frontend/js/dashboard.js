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
// $('#getall').click(async()=>{
    // $.get(`/userproblems/${userid.id}`,(data,status)=>{
    //     if(status=="success")
    //     {
    //         var question=""
    //         var c=1
    //         var v=1
    //         for(let i=0;i<data.length;i++)
    //         {
    //             question+="<div id=\"table\"><table>"
    //             question+="<tr><th>"+v+". "+data[i].description+"</th></tr></table>"
    //             question+="<div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck"+c+"\"><label class=\"form-check-label\" for=\"defaultCheck"+c+"\">"+data[i].option1+"</label></div>"
    //             c=c+1
    //             question+="<div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck"+c+"\"><label class=\"form-check-label\" for=\"defaultCheck"+c+"\">"+data[i].option2+"</label></div>"
    //             c=c+1
    //             question+="<div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck"+c+"\"><label class=\"form-check-label\" for=\"defaultCheck"+c+"\">"+data[i].option3+"</label></div>"
    //             c=c+1
    //             question+="<div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck"+c+"\"><label class=\"form-check-label\" for=\"defaultCheck"+c+"\">"+data[i].option4+"</label><hr></div>"
    //              c=c+1
    //              v++
    //         }
    //         $('body').append(question)
    //     }
    // })
