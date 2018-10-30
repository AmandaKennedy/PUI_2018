// dynamically add images to the DOM
function addPic() {
    var img = new Image();
    img.src = "plane.png";
    document.body.appendChild(img);
}

function init() {
    var btn = document.createElement('button');
    btn.innerText = 'click me!';
    btn.onclick = addPic;
    document.body.appendChild(btn);
}

$(document).ready(init);