// var a = document.querySelector("h1");
// console.log(a);
// console.dir(a);
// var b = document.createElement("p");
// b.innerText="I'm Apurv Jain";
// b.style.color="Red";
// b.style.fontSize="20px";
// b.style.fontWeight="Bolder";
// a.after(b);
// a.style.backgroundColor="grey";
// a.style.color="white";
// a.style.marginTop = "10px";
// a.style.marginLeft = "0px";
// a.style.paddingLeft="9px";
// console.dir(a);

const fact = (n)=>{
    return new Promise((resolve,reject)=>{
            var f=1;
            for(i=1;i<=n;i++){
                f=f*i;
            }
            if(f>200){
                reject("Exception");
            }
            else{
            resolve(f);
            }
    });
}
const sum = (a,b) => {
    return new Promise((resolve,reject) => {
            var c= a+b;
            resolve(c);
    });
}
const sqare = (sum)=>{
    return new Promise((resolve,reject)=>{
        var sqr = sum*sum;
        resolve(sqr);
    });
}
// var a = fact(5).then((arg)=>{
//     console.log(`The factorial is ${arg}`);
//     async function handleSqr(){
//         return await sum(arg,5);
//     }
// }).catch(()=>{
//     console.log("Fact Exception");
// });
async function show(){
try {
    var tot = await fact(5);
    var sumi = await sum(tot,5);
    var sr = await sqare(sumi);
    console.log(tot);
    console.log(sumi);
    console.log(sr);
} catch (error) {
    console.log("Eroorrrr");
}
}
show();

// var sq = a.then((arg)=>{
//     if(arg>0){
//     console.log(arg);
//     async function handleSqr(){
//         return await sqare(arg);
//     }
//     }
// }).catch(()=>{
//     console.log("Sum Excephtion ");
// });

// sq.then((arg)=>{
//     if(arg>0){
//     console.log(`Square is ${arg}`);
//     }
// });

