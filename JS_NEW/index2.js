let btn = document.querySelector("#btn1");
btn.onclick = ()=>{
    head = document.querySelector("h1");
    head.style.color="Green";
    btn.style.color="Blue";
    btn.style.margin="auto 600px";
    head.style.margin="auto 580px";

}
btn.ondblclick = ()=>{
    var p = document.querySelector("#p1");
    p.style.backgroundColor="#EEBAB2";
    p.style.color="#C54B6C";
    p.style.fontSize="30px";
    var bdy = document.querySelector("body");
    bdy.style.backgroundColor="#218B82";
    head.style.color="#9AD9DB";
}