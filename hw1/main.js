let elems = document.getElementsByClassName("default");

for (let i = 0; i < elems.length; i ++) {
    elems[i].addEventListener("mouseover", mouseover);
    elems[i].addEventListener("mouseout", mouseout);
}

var old_classes = "";

function mouseover(event) {
    old_classes = event.target.getAttribute("class");
    event.target.setAttribute("class", old_classes + " divcol1");
}

function mouseout(event) {
    event.target.setAttribute("class", old_classes)
}