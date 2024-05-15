var add = document.getElementById("add");
var del = document.getElementById("delete");
var i = 5;
add.onclick = () =>{
    var name = document.getElementById("train-name").value;
    
    if(!(name=="")){
        var a = document.getElementById("trains");
        var newtr = document.createElement("option");
        newtr.setAttribute("id",i+1);
        i=i+1;
        newtr.innerHTML=name;
        a.appendChild(newtr);
        document.getElementById("suc").innerHTML="Train Added";
        document.getElementById("suc").style.color="green";
    }
}
del.onclick = () =>{
    var name = document.getElementById("del-name").value;
    if(!(name=="")){
        for(j=2;j<=i;j++){
            var d = document.getElementById(j).innerText;
            if(name==d){
                var nam = document.getElementById("trains");
                var delname = document.getElementById(j);
                nam.removeChild(delname);
                document.getElementById("sucd").innerHTML="Train Deleted";
                document.getElementById("sucd").style.color = "red";
                i=i-1;
            }
        }
        
    }
}