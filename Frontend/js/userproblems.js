var userid={
    id:localStorage.getItem("id")
}
// var asd=async()=>{
$('#logout').click(async()=>{
        console.log(1)
       await $.post('/logout',userid,(data,status)=>{
            if(status=="success")
            {
                console.log(data)
                window.location.replace('/')
            }
       })
    })
 $.get('/allmyproblems',userid,(data,status)=>{
    if(status=="success")
    {
        var question=""
        var c=1,v=1
        for(let i=0;i<data.length;i++)
        {
            question+="<div id=\"table\"><table>"
            question+="<tr><th>"+v+".  "+data[i].description+"</th></tr></table>"
             v++
            question+="<div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck"+c+"\"><label class=\"form-check-label\" for=\"defaultCheck"+c+"\">"+data[i].option1+"</label></div>"
            c=c+1
            question+="<div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck"+c+"\"><label class=\"form-check-label\" for=\"defaultCheck"+c+"\">"+data[i].option2+"</label></div>"
            c=c+1
            question+="<div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck"+c+"\"><label class=\"form-check-label\" for=\"defaultCheck"+c+"\">"+data[i].option3+"</label></div>"
            c=c+1
            question+="<div class=\"form-check\"><input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"defaultCheck"+c+"\"><label class=\"form-check-label\" for=\"defaultCheck"+c+"\">"+data[i].option4+"</label></div>"
            question+="<hr>"
             c=c+1
        }
        $('body').append(question)
    }
})
