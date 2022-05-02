// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import sidebar  from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML = sidebar();

let url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in";

async function callData(url) {
    try {
        let news = await fetch(url);
        let data = await news.json();
        console.log("data : ",data.articles);
        appendData(data.articles);
        return data.articles;

    }catch(error) {
        console.log("error :",error);
    }
}

callData(url);

function appendData(data) {

    data.map(function(data) {

        let results = document.getElementById("results");

        let container = document.createElement("div");
        container.setAttribute("id","container");

        let image = document.createElement("img");
        image.src = data.urlToImage

        let news_detail = document.createElement("div");
        // news_detail.style.display = ""
           let p1 = document.createElement("p");
         p1.innerHTML = data.description;

           let p2 = document.createElement("p");
         p2.innerHTML = data.title;
         p2.style.fontWeight = "bold";

            news_detail.append(p2,p1);
            container.append(image,news_detail);

            results.append(container);

    })
}
