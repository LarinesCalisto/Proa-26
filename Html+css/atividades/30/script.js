var smallCursor = document.getElementById("small-cursor");
var largeCursor = document.getElementById("large-cursor");

document.onmousemove = function(e){
    // Move o ponto central
    smallCursor.style.left = e.pageX + "px";
    smallCursor.style.top = e.pageY + "px";
    
    // Move o círculo maior com um pequeno atraso definido no CSS transition
    largeCursor.style.left = e.pageX + "px";
    largeCursor.style.top = e.pageY + "px";
}