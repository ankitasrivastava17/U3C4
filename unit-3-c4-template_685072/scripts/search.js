// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import { callData, appendData} from "./main.js";

let search = localStorage.getItem("search_input");

// const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${search}`;
const url = `https://masai-mock-api.herokuapp.com/news?q=${search}`;
let newsData = await callData(url);
console.log("news :",newsData)
appendData(newsData);



