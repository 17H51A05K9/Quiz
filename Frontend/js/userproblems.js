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
 $('#navbardrop').html(localStorage.getItem("username"))
$.get(`/userproblems/${userid.id}`,(data,status)=>{
    if(status=="success")
    {
        var question=""
        var c=1
        var v=1
        for(let i=0;i<data.length;i++)
        {
            question+="<h3>Question"+c+"</h3>";
            question+="<p><strong>"+data[i].description+"</strong></p>"
            question+="<div id=\"radios\"> <div><input type=\"radio\" name=\"joke\" value=\"bed\" />"+data[i].option1+"</div><div><input type=\"radio\" name=\"joke\" value=\"bed\" />"+data[i].option2+"</div><div><input type=\"radio\" name=\"joke\" value=\"snake\" /> "+data[i].option3+"</div>"
            question+="<div><input type=\"radio\" name=\"joke\" value=\"bed\" />"+data[i].option4+"</div></div><br>"
            //question+="<div><button type=\"button\" class=\"btn btn-primary\">Submit</button><div>"
          question+="<div class=\"container-fluid\"><div class=\"row\"><div class=\"col-xs-5\"></div><div class=\"col-xs-2\"><a class=\"btn btn-md btn-primary\">Submit</a></div><div class=\"col-xs-5\"></div></div></div>"
          question+="<hr>"  
          c++ 
        }
        $('body').append(question)
    }
})
