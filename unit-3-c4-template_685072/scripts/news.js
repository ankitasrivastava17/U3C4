// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import sidebar  from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML = sidebar();



import { callData, appendData} from "./main.js";


let search = document.getElementById("search_input");
search.addEventListener("click",function(elem){
    if(elem.code == "Enter"){
        if(search.value){
            localStorage.setItem("search_Item",search.value);
            callData(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${search}`);
            appendData(elem);
            location.href="./search.html";
        }
    }
})
let main = JSON.parse(localStorage.getItem("search_Item"));



// appendData(main);