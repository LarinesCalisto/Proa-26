var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("backImg");

var backgroundImg = new Array(
    "img/2.jpeg",
    "img/3.jpeg",
    "img/4.jpeg",
    "img/7.jpeg",
    "img/6.jpeg"
    
);

let i = 0;

next.onclick = function(){
    if(i < 4){
        hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}

prev.onclick = function(){
    if(i > 0){
        hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}