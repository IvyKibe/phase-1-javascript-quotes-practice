document.addEventListener("DOMContentLoaded", initializer);

function initializer() {
  addQuote();

  let url = "http://localhost:3000/quotes";
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.forEach((element) => loadContent(element)));
}

function loadContent(data) {
  let section = document.querySelector("#usersQuotes");
  let Authors = document.createElement("h1");
  let Content = document.createElement("p");
  section.appendChild(Authors);
  section.appendChild(Content);

  Authors.innerText = data.author;
  Content.innerText = data.quote;
}

function addQuote() {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    let authors = document.querySelector("#author");
    let quotes = document.querySelector("#new-quote");

    let formData={
        author:authors.value,
        quote:quotes.value,
    }

    e.preventDefault();
    console.log("we are watchingquote");
    fetch("http://localhost:3000/quotes",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(formData)
        
    })
    .then(response=>response.json())
    .then(data=>loadContent(data))


    form.reset()
 
  });
}