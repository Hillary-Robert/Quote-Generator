let button = document.getElementById("button")
let quote = document.getElementById("generated-quotes")
let author = document.getElementById("author")
let color = document.querySelector(".generate-container")


const quotes = [
  {
    quote: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. ",

    author: "Nelson Mandela ",

    color: "blue"
  },

  {
    quote: "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles. ",

    author: "Wayne Dyer ",

    color: "#DC143C"
  },

  {
    quote: "Believe you can and you're halfway there. ",

    author: "- Theodore Roosevelt - ",

    color: "#4169E1"
  },

  {
    quote: "Learn the rules like a pro, so you can break them like an artist.",

    author: "Pablo Picasso ",

    color: "purple"
  },


  {
    quote: "Do one thing every day that scares you. ",

    author: "Eleanor Roosevelt ",

    color: "lemon"
  },


  {
    quote: "If you can dream it, you can do it. ",

    author: "Walt Disney",

    color: "red"
  },

  {
    quote: "Even if you are on the right track, you'll get run over if you just sit there.",

    author: "Will Rogers",


    color: "Green"
  },

  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",

    author: "Winston Churchill",

    color: "black"
  },

];


button.addEventListener("click", function(){
  
  let random = Math.floor(Math.random()* quotes.length)

  color.style.display = "block"
  quote.innerText = quotes[random].quote
  author.innerText = quotes[random].author
  color.style.backgroundColor = quotes[random].color
  quote.style.color = "white"
 

})
