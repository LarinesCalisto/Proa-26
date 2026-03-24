var nextBtn = document.getElementById("nextBtn");
var backBtn = document.getElementById("backBtn");
var slideImg = document.getElementById("slideImg");

var images = new Array(
    "img/4.jpeg",
    "img/8.jpeg",
    "img/6.jpeg",
    "img/9.jpeg"
);

let i = 0;

nextBtn.onclick = function(){
    if(i < 3){
        i++;
        slideImg.src = images[i];
    }
}

backBtn.onclick = function(){
    if(i > 0){
        i--;
        slideImg.src = images[i];
    }
}