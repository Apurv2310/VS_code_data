// var btn = document.getElementById("btn");
// var show = document.getElementById("show");
// btn.onclick = (event)=>{
//     event.preventDefault();
//     var name = document.getElementById("name").value;
//     var n = name.trim();
//     var chk = 0;
//     if(n.length==0){
//         warn = document.getElementById("warn");
//         warn.innerHTML="Name is Required";
//         warn.style.color="red";
//     }
//     else{
//         check=1;
//     }
//     if(check==0){
//     var ni = document.getElementById("name");
//         ni.onkeydown = () => {
//             warn.innerHTML = "";
//         }
//     }
//     var mail = document.getElementById("em").value;
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(regex.test(mail)==false){
//         var email = document.getElementById("emailHelp");
//         email.innerHTML = "Email is not Correct";
//         email.style.color="red";
//     }
//     var mai = document.getElementById("em");
//         mai.onkeydown = () => {
//             email.innerHTML = "";
//         }

//     var pass = document.getElementById("pass").value;
//     const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{15,}$/;
//     if(passregex.test(pass)==false){
//         var pw = document.getElementById("pwarn");
//         pw.innerHTML="Password Should be 8 charachter long";
//         pw.style.color="red";
//     }
//     var pi = document.getElementById("pass");
//         pi.onkeydown = () => {
//             pw.innerHTML = "";
//         }
// }
// var check=0;
// show.onclick = (event) => {
//     event.preventDefault();
//     if(check==0){
//         var s = document.getElementById("pass");
//         s.setAttribute("type","text");
//         show.innerHTML="Hide";
//         check=1;
//     }
//     else{
//         var s = document.getElementById("pass");
//         s.setAttribute("type","password");
//         show.innerHTML="Show";
//         check=0;
//     }
// }


// var btn = document.getElementById("btn");
// var show = document.getElementById("show");

// btn.onclick = (event) => {
//     event.preventDefault();
//     var name = document.getElementById("name").value;
//     var n = name.trim();
//     var check = 0; // Declare check variable here

//     if (n.length == 0) {
//         warn = document.getElementById("warn");
//         warn.innerHTML = "Name is Required";
//         warn.style.color = "red";
//     } else {
//         check = 1;
//     }

//     if (check == 0) {
//         var ni = document.getElementById("name");
//         ni.onkeydown = () => {
//             warn.innerHTML = "";
//         };
//     }

//     var mail = document.getElementById("em").value;
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (regex.test(mail) == false) {
//         var email = document.getElementById("emailHelp");
//         email.innerHTML = "Email is not Correct";
//         email.style.color = "red";
//     }

//     var mai = document.getElementById("em");
//     mai.onkeydown = () => {
//         email.innerHTML = "";
//     };

//     var pass = document.getElementById("pass").value;
//     const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (passregex.test(pass) == false) {
//         var pw = document.getElementById("pwarn");
//         pw.innerHTML = "Password Should be 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.";
//         pw.style.color = "red";
//     }

//     var pi = document.getElementById("pass");
//     pi.onkeydown = () => {
//         pw.innerHTML = "";
//     };
// };

// show.onclick = () => {
//     var passField = document.getElementById("pass");

//     if (passField.getAttribute("type") === "password") {
//         passField.setAttribute("type", "text");
//         show.innerHTML = "Hide";
//     } else {
//         passField.setAttribute("type", "password");
//         show.innerHTML = "Show";
//     }
// };
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("btn");
    var show = document.getElementById("show");

    btn.addEventListener("click", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var n = name.trim();
        var check = 0; // Declare check variable here

        if (n.length == 0) {
            warn = document.getElementById("warn");
            warn.innerHTML = "Name is Required";
            warn.style.color = "red";
        } else {
            check = 1;
        }

        if (check == 0) {
            var ni = document.getElementById("name");
            ni.onkeydown = () => {
                warn.innerHTML = "";
            };
        }

        var mail = document.getElementById("em").value;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (regex.test(mail) == false) {
            var email = document.getElementById("emailHelp");
            email.innerHTML = "Email is not Correct";
            email.style.color = "red";
        }

        var mai = document.getElementById("em");
        mai.onkeydown = () => {
            email.innerHTML = "";
        };

        var pass = document.getElementById("pass").value;
        const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (passregex.test(pass) == false) {
            var pw = document.getElementById("pwarn");
            pw.innerHTML = "Password Should be 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.";
            pw.style.color = "red";
        }

        var pi = document.getElementById("pass");
        pi.onkeydown = () => {
            pw.innerHTML = "";
        };
    });

    show.addEventListener("click", function() {
        var passField = document.getElementById("pass");

        if (passField.getAttribute("type") === "password") {
            passField.setAttribute("type", "text");
            show.innerHTML = "Hide";
        } else {
            passField.setAttribute("type", "password");
            show.innerHTML = "Show";
        }
    });
});
