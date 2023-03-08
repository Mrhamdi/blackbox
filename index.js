
        var table=document.querySelector('table');
        const xhr=XMLHttpRequest();
        xhr.open("GET","https://blackbox-backend.rf.gd/movies.php");
        xhr.send();
        fetch("https://blackbox-backend.rf.gd/movies.php").then(Request=>Request.json()).then(myData=>{
            myData.forEach((item) => {
                document.getElementById("m").innerHTML+='<div class="col-md-4"><div class="card"><div class="card-body"><img class="img-fluid" src="'+item.img+'"/><h4 class="card-title" id="card-title">'+item.name+'</h4><h6 class="text-muted card-subtitle mb-2">BlackBox</h6><p class="card-text">'+item.description+'</p><a href="'+item.url+'"><button class="btn btn-dark" type="button" style="box-shadow: 0px 0px 11px var(--bs-gray-900);">Dowload</button></a> <a href="mov.html?='+item.id+'"><button class="btn btn-dark" type="button" style="margin-right: 0px;margin-left: 7px;box-shadow: 0px 0px 13px var(--bs-gray-900);">Watch</button></a></div></div></div>'

;
                
            });
        })
  
