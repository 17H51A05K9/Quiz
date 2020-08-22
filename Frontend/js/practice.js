var userid={
    id:localStorage.getItem("id")
}
$('#navbardrop').html(localStorage.getItem("username"))
    $.get('/allproblems',(data,status)=>{
        if(status=="success")
    {
        var question=""
        var c=1
        var v=1,t=1;
        for(let i=0;i<data.length;i++)
        {
            
            question+="<h3>Question"+c+"</h3>";
            question+="<p><strong>"+data[i].description+"</strong></p><div id=\"radios\">"
             question+="<input id=\"radio1\"type=\"radio\" name=\"optradio\">"+data[i].option1+"</input><br>"
             question+="<input id=\"radio2\"type=\"radio\" name=\"optradio\">"+data[i].option2+"</input><br>"
             question+="<input id=\"radio3\"type=\"radio\" name=\"optradio\">"+data[i].option3+"</input><br>"
             question+="<input id=\"radio4\"type=\"radio\" name=\"optradio\">"+data[i].option4+"</input></div></div>"
            question+="<div id=\"but\"><button id=\"buto\"class=\"btn btn-primary\">submit</button>&nbsp;<button id=\"buto1\"class=\"btn btn-success\">Next Question</button></div>"
            //question+="<div id=\"but1\"><button id=\"buto1\"class=\"btn btn-success\">Next Question</button></div>"
            question+="<hr>"  
             
             c++;
            //   $('#radio1').click(()=>{
            //       $('#buto').click(()=>{
            //           if(data[i].option1==data[i].correctanswer)
            //           {
            //               console.log("c")
            //           }
            //           else
            //           console.log("w")
            //         //console.log(data[i].option1+" "+data[i].correctanswer)
            //       })
            //   })
            //   $('#radio2').click(()=>{
            //     $('#buto').click(()=>{
            //         if(data[i].option2==data[i].correctanswer)
            //         {
            //             console.log("c")
            //         }
            //         else
            //         console.log("w")
            //     })
            // })
            // $('#radio3').click(()=>{
            //     $('#buto').click(()=>{
            //         if(data[i].option3==data[i].correctanswer)
            //         {
            //             console.log("c")
            //         }
            //         else
            //         console.log("w")
            //     })
            // })
            // $('#radio4').click(()=>{
            //     $('#buto').click(()=>{
            //         if(data[i].option4==data[i].correctanswer)
            //         {
            //             console.log("c")
            //         }
            //         else
            //         console.log("w")
            //     })
            
            //continue
            
            // else{
            // question=""
            // question+="<h3>Question"+c+"</h3>";
            // question+="<p><strong>"+data[i].description+"</strong></p><div id=\"radios\">"
            //  question+="<input id=\"radio1\"type=\"radio\" name=\"optradio\">"+data[i].option1+"</input><br>"
            //  question+="<input id=\"radio2\"type=\"radio\" name=\"optradio\">"+data[i].option2+"</input><br>"
            //  question+="<input id=\"radio3\"type=\"radio\" name=\"optradio\">"+data[i].option3+"</input><br>"
            //  question+="<input id=\"radio4\"type=\"radio\" name=\"optradio\">"+data[i].option4+"</input></div></div>"
            // question+="<div id=\"but\"><button id=\"buto\"class=\"btn btn-primary\">submit</button>&nbsp;<button id=\"buto1\"class=\"btn btn-success\">Next Question</button></div>"
            // question+="<hr>" } 
            // //else
            // $('#buto1').click(()=>{
            //     c++
            //     question=""
            //    question+="<h3>Question"+c+"</h3>";
            //    question+="<p><strong>"+data[i].description+"</strong></p><div id=\"radios\">"
            //     question+="<input id=\"radio1\"type=\"radio\" name=\"optradio\">"+data[i].option1+"</input><br>"
            //     question+="<input id=\"radio2\"type=\"radio\" name=\"optradio\">"+data[i].option2+"</input><br>"
            //     question+="<input id=\"radio3\"type=\"radio\" name=\"optradio\">"+data[i].option3+"</input><br>"
            //     question+="<input id=\"radio4\"type=\"radio\" name=\"optradio\">"+data[i].option4+"</input></div></div>"
            //    question+="<div id=\"but\"><button id=\"buto\"class=\"btn btn-primary\">submit</button>&nbsp;<button id=\"buto1\"class=\"btn btn-success\">Next Question</button></div>"
            //    question+="<hr>"
            //  $('body').append(question)
            //   $('#radio1').click(()=>{
            //       $('#buto').click(()=>{
            //           if(data[i].option1==data[i].correctanswer)
            //           {
            //               console.log("c")
            //           }
            //           else
            //           console.log("w")
            //         //console.log(data[i].option1+" "+data[i].correctanswer)
            //       })
            //   })
            //   $('#radio2').click(()=>{
            //     $('#buto').click(()=>{
            //         if(data[i].option2==data[i].correctanswer)
            //         {
            //             console.log("c")
            //         }
            //         else
            //         console.log("w")
            //     })
            // })
            // $('#radio3').click(()=>{
            //     $('#buto').click(()=>{
            //         if(data[i].option3==data[i].correctanswer)
            //         {
            //             console.log("c")
            //         }
            //         else
            //         console.log("w")
            //     })
            // })
            // $('#radio4').click(()=>{
            //     $('#buto').click(()=>{
            //         if(data[i].option4==data[i].correctanswer)
            //         {
            //             console.log("c")
            //         }
            //         else
            //         console.log("w")
            //     })
            // })
            // })
           // i--
        }
        $('body').append(question)
       
    }
    })
   
$('#logout').click(async()=>{
    
    await $.post('/logout',userid,(data,status)=>{
         if(status=="success")
         {
            // console.log(data)
             window.location.replace('/')
         }
    })
 })