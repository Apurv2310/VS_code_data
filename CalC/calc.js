var btn1 = document.querySelector("#addBtn");
var btn2 = document.querySelector("#subBtn");
var btn3 = document.querySelector("#mulBtn");
var btn4 = document.querySelector("#divBtn");
btn1.onclick = ()=>{
    num1 = parseInt(document.getElementById("ci1").value);
    num2 = parseInt(document.getElementById("ci2").value);
    if((num1*0)!=0 && (num2*0)==0){
        var sp = document.getElementById("cspan");
        sp.innerHTML=`Enter Valid Value in First Input`;
        sp.style.marginLeft="30%";
        sp.style.width="40%";
        sp.style.height="45px";
        sp.style.border="2px solid rgb(5, 117, 31";
    }
    else if((num1*0)==0 && (num2*0)!=0){
        var sp = document.getElementById("cspan");
        sp.innerHTML=`Enter Valid Value in Second Input`;
        sp.style.marginLeft="30%";
        sp.style.width="42%";
        sp.style.height="45px";
        sp.style.border="2px solid rgb(5, 117, 31";
    }
    else{
    if((num1*0)==0 && (num2*0)==0){
    tot = num1+num2;
    console.log(tot);
    var sp = document.getElementById("cspan");
    sp.innerHTML=`${num1}+${num2} = ${tot}`;
    sp.style.width="20%";
    sp.style.height="45px";
    sp.style.border="2px solid rgb(5, 117, 31";
    }
    else{
    var sp = document.getElementById("cspan");
    sp.innerHTML=`Enter Number value`;
    sp.style.marginLeft="36%";
    sp.style.width="25%";
    sp.style.height="45px";
    sp.style.border="2px solid rgb(5, 117, 31";
    }
    }
}
btn2.onclick = ()=>{
    num1 = parseInt(document.getElementById("ci1").value);
    num2 = parseInt(document.getElementById("ci2").value);
    if((num1*0)!=0 && (num2*0)==0){
        var sp = document.getElementById("cspan");
        sp.innerHTML=`Enter Valid Value in First Input`;
        sp.style.marginLeft="30%";
        sp.style.width="40%";
        sp.style.height="45px";
        sp.style.border="2px solid rgb(5, 117, 31";
    }
    else if((num1*0)==0 && (num2*0)!=0){
        var sp = document.getElementById("cspan");
        sp.innerHTML=`Enter Valid Value in Second Input`;
        sp.style.marginLeft="30%";
        sp.style.width="42%";
        sp.style.height="45px";
        sp.style.border="2px solid rgb(5, 117, 31";
    }
    else{
    if((num1*0)==0 && (num2*0)==0){
    tot = num1-num2;
    console.log(tot);
    var sp = document.getElementById("cspan");
    sp.innerHTML=`${num1}-${num2} = ${tot}`;
    sp.style.width="20%";
    sp.style.height="45px";
    sp.style.border="2px solid rgb(5, 117, 31";
    }
    else{
        var sp = document.getElementById("cspan");
        sp.innerHTML=`Enter Number value`;
        sp.style.marginLeft="36%";
        sp.style.width="25%";
        sp.style.height="45px";
        sp.style.border="2px solid rgb(5, 117, 31";
    }
    }
}
btn3.onclick = ()=>{
    num1 = parseInt(document.getElementById("ci1").value);
    num2 = parseInt(document.getElementById("ci2").value);
    if((num1*0)!=0 && (num2*0)==0){
        var sp = document.getElementById("cspan");
        sp.innerHTML=`Enter Valid Value in First Input`;
        sp.style.marginLeft="30%";
        sp.style.width="40%";
        sp.style.height="45px";
        sp.style.border="2px solid rgb(5, 117, 31";
    }
    else if((num1*0)==0 && (num2*0)!=0){
        var sp = document.getElementById("cspan");
        sp.innerHTML=`Enter Valid Value in Second Input`;
        sp.style.marginLeft="30%";
        sp.style.width="42%";
        sp.style.height="45px";
        sp.style.border="2px solid rgb(5, 117, 31";
    }
    else{
    if((num1*0)==0 && (num2*0)==0){
    tot = num1*num2;
    console.log(tot);
    var sp = document.getElementById("cspan");
    sp.innerHTML=`${num1}*${num2} = ${tot}`;
    sp.style.marginLeft="36%";
    sp.style.width="20%";
    sp.style.height="45px";
    sp.style.border="2px solid rgb(5, 117, 31";
    }
    else{
        var sp = document.getElementById("cspan");
        sp.innerHTML=`Enter Number value`;
        sp.style.marginLeft="36%";
        sp.style.width="25%";
        sp.style.height="45px";
        sp.style.border="2px solid rgb(5, 117, 31";
    }
    }   
}
btn4.onclick = ()=>{
    num1 = parseFloat(document.getElementById("ci1").value);
    num2 = parseFloat(document.getElementById("ci2").value);
    if((num1*0)!=0 && (num2*0)==0){
        var sp = document.getElementById("cspan");
        sp.innerHTML=`Enter Valid Value in First Input`;
        sp.style.marginLeft="30%";
        sp.style.width="40%";
        sp.style.height="45px";
        sp.style.border="2px solid rgb(5, 117, 31";
    }
    else if((num1*0)==0 && (num2*0)!=0){
        var sp = document.getElementById("cspan");
        sp.innerHTML=`Enter Valid Value in Second Input`;
        sp.style.marginLeft="30%";
        sp.style.width="42%";
        sp.style.height="45px";
        sp.style.border="2px solid rgb(5, 117, 31";
    }
    else{
    if((num1*0)==0 && (num2*0)==0){
    tot = num1/num2;
    console.log(tot);
    var sp = document.getElementById("cspan");
    sp.innerHTML=`${num1}/${num2} = ${tot}`;
    sp.style.width="20%";
    sp.style.height="45px";
    sp.style.border="2px solid rgb(5, 117, 31";
    }
    else{
        var sp = document.getElementById("cspan");
        sp.innerHTML=`Enter Number value`;
        sp.style.width="25%";
        sp.style.height="45px";
        sp.style.border="2px solid rgb(5, 117, 31";
    }
    }
}
