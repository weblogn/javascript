 var clock=document.querySelector("#clock")

 var time=document.querySelector("#time")


setInterval(function(){
    let date= new Date();
    
time.innerHTML=date.toLocaleTimeString();

 },100);
 