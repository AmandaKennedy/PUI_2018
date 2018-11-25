
// Contact Us Page: Form Submission //

function formSubmit() {
    var elmnt = document.createElement("form");
    var textnode = document.createTextNode("Your message has been submitted.");
    elmnt.appendChild(textnode);

    var item = document.getElementById("container");
    item.replaceChild(elmnt, item.childNodes[0]);
}

//Footer Animation//

let xs = []
for (var i = 0; i <= 500; i++) {
  xs.push(i)
}

let t = 0

function animate() {
  
  let points = xs.map(x => {
    
    let y = 200 + 20 * Math.sin((x + t) / 10)
    
    return [x, y]
  })
  
  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")
  
  document.querySelector("path").setAttribute("d", path)
  
  t += 0.5
  
  requestAnimationFrame(animate)
}

//animate()

