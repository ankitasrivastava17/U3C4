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

// callData(url);

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

            results.addEventListener("click",function(elem){
                let news = [];
                news.push(elem);
                localStorage.setItem("news",JSON.stringify(news));
                location.href = "./news.html";
            })

    })

    main.map(function(elem){
        let div1 = document.createElement("div");
        div1.setAttribute("id","news1");
        let box1 = document.createElement("div");
        box1.innerHTML = elem.title;

        let box2 = document.createElement("div");
        box2.innerHTML = elem.description;

        let box3 = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.urlToImage;
        box3.append(img);

        div1.append(box1,box2,box3);
        document.getElementById("detailed_news").append(div1);

    })
}

export {callData,appendData};
