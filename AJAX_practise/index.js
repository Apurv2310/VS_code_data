var btn = document.getElementById("btn");
console.log(btn);
btn.onclick=()=>{
    var ajax= new XMLHttpRequest();
    ajax.open("get","https://jsonplaceholder.typicode.com/users");
    ajax.send();
    ajax.onreadystatechange = function() {
        if (ajax.readyState === XMLHttpRequest.DONE) {
            if (ajax.status === 200) {
                var tby = document.getElementById("tb");
                var dt = JSON.parse(ajax.responseText);
                for(i=0;i<dt.length;i++){
                    var row = document.createElement("tr");
                        var name=document.createElement("td");
                        var id = document.createElement("td");
                        var uname=document.createElement("td");
                        var mail = document.createElement("td");
                        name.innerHTML=dt[i].name;
                        id.innerHTML=dt[i].id;
                        uname.innerHTML=dt[i].username;
                        mail.innerHTML=dt[i].email;
                        row.appendChild(name);
                        row.appendChild(id);
                        row.appendChild(uname);
                        row.appendChild(mail);
                        tby.appendChild(row);
                }
            } else {
                console.error('Error:', ajax.status); // Log any errors
            }
        }
    };
}