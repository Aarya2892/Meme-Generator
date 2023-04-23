const generatememebtn = document.querySelector(".meme-generator .meme-generator-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-title");
const memeauthor = document.querySelector(".meme-author");

const updateDetails = (url, title, author) =>{
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML= title;
    memeauthor.innerHTML= author;
};

const generatememe=()=>{
    fetch(" https://meme-api.com/gimme/wholesomememes").then((response)=> response.json()).then(data=>{
         updateDetails(data.url, data.title, data.author)
    });
};

generatememebtn.addEventListener("click",generatememe);