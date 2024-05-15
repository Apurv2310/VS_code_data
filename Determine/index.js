var btn = document.getElementById("btn");
btn.onclick =() => {
    var input = document.getElementById("inp").value;
    var dis = document.getElementById("display");
    var np = /^\d$/;
    var cp = /^[a-zA-z]$/;
    var sp = /[^\w\s]$/;
    if(np.test(input)){
        dis.innerHTML = `You enterd Number ${input}`;
        return;
    }
    else if(cp.test(input)){
        dis.innerHTML = `You enterd Character ${input}`;
        return;
    }
    else if(sp.test(input)){
        dis.innerHTML = `You enterd Special Character ${input}`;
        return;
    }
}