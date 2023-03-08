
        function add(){
            named=document.getElementById("name").value;
            emaild=document.getElementById("email").value;
            fbd=document.getElementById("fb").value;
        var data={name:named,email:emaild,fb:fbd};
        fetch("http://127.0.0.1/scripts/Blackbox_back_end/requests.php",{
            method:'POST',
            body:JSON.stringify(data)
        }).then(Request=>Request.json()).then(myData=>{
            location.replace('done.html')
        })
    }