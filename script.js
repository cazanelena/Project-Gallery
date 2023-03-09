const cardInformation = {
  1: {
    title: "Hobby Page",
    info: "This is a website I've created to showcase some of my interest and hobbies. For this project I used HTML, styled with CSS and use a bit of JavaScript.",
    github: "https://github.com/cazanelena/Hobby-Page",
    src: "Images/Hobby Page.png",
  },
  2: {
    title: "Memory Card Game",
    info: "The game starts with all the cards face down and the player take turns to turn over two cards. The goal of the game is to match all your card face up without losing all your lives.",
    github: "https://github.com/cazanelena/Game-App",
    src: "Images/Memory Card Game.png",
  },
  3: {
    title: "Movie recommendation",
    info: "This is a movie recommendation website. For this project I used HTML and populate that with data from a JavaScript object. The user will be able to intereat with the web page and update the JS object",
    github: "https://github.com/cazanelena/Movie-Data",
    src: "Images/Movie Page.png",
  },
  4: {
    title: "Travel website",
    info: "This is a travel website I've created when I took a web development course part of the Code First Girls program. It was fun working with HTML, CSS and a bit of JS.",
    github: "https://github.com/cazanelena/CFG---Travel-Website",
    src: "Images/Travel Page.png",
  }
  
};

// Varibales

let openBtn = document.getElementsByClassName("button");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

// Event Listiner
// Open modal

for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener("click", function () {
    let card = openBtn[i].parentElement;
    let projectId = i + 1;
    openModal(projectId);
    modalContainer.style.display = "block";
  });
}

function openModal(projectId) {
  fillOut(projectId);
}

function fillOut(id) {
  document.getElementById("title").innerHTML = cardInformation[id].title;
  document.getElementById("info").innerHTML = cardInformation[id].info;

  document.getElementById("github").onclick = function () {
    window.open(cardInformation[id].github, "_blank");
  };
}

// Close Modal
closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

// Close the modal even when you click outside of the box
window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

// Loop through the object and add the src picture to the HTML
for (const id in cardInformation) {
  const picture = document.querySelectorAll(".pic");
  const projectTitle = document.querySelectorAll(".title-project");
  picture[id - 1].src = cardInformation[id].src;
  projectTitle[id - 1].innerHTML = cardInformation[id].title;
}
