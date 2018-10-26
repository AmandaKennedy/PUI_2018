<!-- javascript --><script src="muddypaws.js" type="text/javascript"></script>


function onChange() {
    console.log
}
function colorSelected(opt) {
    console.log(opt.value)
    var color = opt.value
    var img1 = document.getElementById("productImage")
    img1.src =  "./hw_6_assetts/harness_"+color+".jpg"
    var img2 = document.getElementById("productImage")
    img2.src =  "./hw_6_assetts/collar_"+color+".jpg"
}

function quantitySelected(opt) {
    console.log(opt.value)
    var priceTag = document.getElementById("price")
    priceTag.textContent =  "$" + (opt.value * 50.00) +".00"
} 

function addToCart()
{
    alert('Your item has been added to your cart!');    
    console.log('hello world console');
     
   /* create products give properties -> constructor function  document ready function: create array, add in, move to local storage*/
    
    var setItem = localStorage.setItem("cartString", JSON.stringify(cartString));
    var cartString = localStorage.getItem("cart") | "[]";
    var cart = JSON.parse(cartString);
    
    var color = document.getElementById("colorDiv");
    var colorVal = color.value;
    
    var quantity = document.getElementById("quantityDiv");
    var quantityVal = quantity.value;
    
    var size = document.getElementById("sizeDiv");
    var sizeVal = size.value;
    var obj = { color: colorVal, size: sizeVal, quantity: quantityVal};
}
//Shopping Cart arrays

var arrayquantitySelected = ["0","1","2","3","4","5"];
var arrayColorSelected = ["Crazyberry","Blackberry","Strawberry","Orangeberry"];
var arraySizeSelected = ["Extra Small", "Small", "Medium", "Large/Extra Large"];    

function renderCart()
{
    var cartString = localStorage.get("cart") | "[]";
    var cart = JSON.parse(cartString);
    
}

//add to wish list

function addToWishList()
{
    alert('Your item has been added to your wish list!');    
    console.log('hello world console');
    
}