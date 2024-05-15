{/* <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
          </div>
 */}

var btn= document.getElementById("btn");
btn.onclick = async () => {
    var response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7798a11308a7462f87ce74c255ccc27f`);
    if(response.status==200){
        var data = await response.json();
        var parent = document.getElementById("pr");
        for(i=0;i<data.articles.length;i++){
            if(i===16){
                
            }
            else{
            var par = document.createElement("div");
            par.setAttribute("class","col");
            var chi1 = document.createElement("div");
            chi1.setAttribute("class","card");
            chi1.setAttribute("id","chi1");
            chi1.setAttribute("style","width: 18rem;");
            var chimg = document.createElement("img");
            chimg.setAttribute("id","chimg");
            chimg.setAttribute("src",data.articles[i].urlToImage);
            var chi2 = document.createElement("div");
            chi2.setAttribute("class","card-body");
            var chh = document.createElement("h5");
            chh.setAttribute("class","card-title");
            chh.innerHTML = data.articles[i].title;
            var chp = document.createElement("p");
            chp.setAttribute("class","card-text");
            chp.innerHTML = data.articles[i].description;
            var cha = document.createElement("a");
            cha.setAttribute("href",data.articles[i].url);
            cha.setAttribute("class","btn btn-primary");
            cha.innerHTML = "Read More";
            chi2.appendChild(chh);
            chi2.appendChild(chp);
            chi2.appendChild(cha);
            chi1.appendChild(chimg);
            chi1.appendChild(chi2);
            par.appendChild(chi1);
            parent.appendChild(par);
            }
        }
    }
}