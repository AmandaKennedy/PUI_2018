
// Contact Us Page: Form Submission //

 

function formSubmit() {
    var elmnt = document.createElement("form");
    var textnode = document.createTextNode("Your message has been submitted.");
    elmnt.appendChild(textnode);

    var item = document.getElementById("myForm");
    item.replaceChild(elmnt, item.children[0]);
}

//Footer Animation modified from //

let xs = []
let maxW = window.innerWidth
for (var i = 0; i <= maxW; i++) {
  xs.push(i)
}

let t = 0

function animate() {
  
  let points = xs.map(x => {
    
    let y = 100 + 20 * Math.sin((x + t) / 50)
    
    return [x, y]
  })
  
  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")
  
  document.querySelector("path").setAttribute("d", path)
  
  t += 0.5
  
  requestAnimationFrame(animate)
}

// Window onLoad Function; put click handlers first //

window.onload = function() {
    animate();
    
    };
