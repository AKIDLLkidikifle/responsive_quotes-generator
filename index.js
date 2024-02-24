
const apiurl = "https://api.quotable.io/random";

async function getQuotes(){
    const response = await fetch(apiurl);
    var data = await response.json();

    const Quotes = data.content;
    const author = data.author;

    document.querySelector(".middle p").innerHTML = Quotes;
    document.querySelector(".author p").innerHTML = "---"+author;
}

document.querySelector("button").addEventListener("click", function(){
    getQuotes();
})
