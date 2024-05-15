var btn = document.getElementById("btn");
btn.onclick = () => {
    var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", function () { console.log(this.responseText); });
    oReq.open("GET", "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_dyDb1T0YTmAYdw0pKzJH6BwBDSeqbcXqs4bb3dDj");
    oReq.send();
    oReq.onreadystatechange = () => {
        if(oReq.status==200 && oReq.readyState==4){
            var data = JSON.parse(oReq.responseText);
            console.log(data);
        }
    }
}