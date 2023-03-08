i=window.location.href
var data={id:i.substr(i.indexOf("=")+1)};
fetch("http://127.0.0.1/scripts/Blackbox_back_end/watch.php",{
    method:'POST',
    body:JSON.stringify(data)
}).then(Request=>Request.json()).then(myData=>{
    
    document.getElementById("t").innerHTML=myData['title']
    document.getElementById("m").innerHTML="<video width='auto' height='auto' controls='' autoplay='' src='+myData['url']'+></video>"
})