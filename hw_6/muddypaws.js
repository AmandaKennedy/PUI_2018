<!-- javascript --><script src="muddypaws.js" type="text/javascript"></script>


function onChange() {
    console.log
}
function colorSelected(opt) {
    console.log(opt.value)
    var color = opt.value
    var img1 = document.getElementById("harnessImage")
    img1.src =  "./hw_6_assetts/harness_"+color+".jpg"
    var img2 = document.getElementById("collarImage")
    img2.src =  "./hw_6_assetts/collar_"+color+".jpg"
}

function quantitySelected(opt) {
    console.log(opt.value)
    var priceTag = document.getElementById("price")
    priceTag.textContent =  "$" + (opt.value * 50.00) +".00"
} 

var obj;
// Add items to shopping cart
function addToCart()
{
    console.log('hello world console');

    // retrieve the user's preferences for item size, color, and quantity
    var color = document.getElementById("colorDiv");
    var colorVal = color.value;

    var quantity = document.getElementById("quantityDiv");
    var quantityVal = quantity.value;

    var size = document.getElementById("sizeDiv");
    var sizeVal = size.value;
    var cartArray=getCartItems();
    for(var i = 0; i < quantityVal; i++) {
        obj = { color: colorVal, size: sizeVal, quantity: 1};
        cartArray.push(obj);   
    }

    // store in local storage
    var setItem = localStorage.setItem("cartString", JSON.stringify(cartArray));

    // var cartString = localStorage.getItem("cart") | "[]";
    // var cart = JSON.parse(cartString);

    // give the user feedback that an item has been added
    updateCartIcon();

   /* create products give properties -> constructor function  document ready function: create array, add in, move to local storage*/
}

function getCartItems() {
    var storage = localStorage.getItem("cartString");
    if (storage) {
        return JSON.parse(storage);
    }
    return [];
}

// change icon of cart to include a circle with the number of items in the cart
function updateCartIcon() {
    var element = document.getElementById('cart-count-badge');
    if (element) {
        var currentCart = getCartItems();
        if (currentCart.length > 0) {
            element.classList.add('active');
            element.textContent = currentCart.length;
        }
    }
    // retrieve quantity of items stored in cart from local storage

    // update visual indication with the number of items
        // draw circle with blue css
        // update number in cart html
}

window.onload = function () {
    updateCartIcon();
    // gets value from the storage and then updates it. if there are items gets the input value on the page. assign to how many items are there.
    
    
}

var itemCount = 0;

$('.add').click(function (){
  itemCount ++;
  $('#itemCount').html(itemCount).css('display', 'block');
}); 

$('.clear').click(function() {
  itemCount = 0;
  $('#itemCount').html('').css('display', 'none');
  $('#cartItems').html('');
}); 


//Shopping Cart arrays

{
    
var arrayquantitySelected = ["0","1","2","3","4","5"];
var arrayColorSelected = ["Crazyberry","Blackberry","Strawberry","Orangeberry"];
var arraySizeSelected = ["Extra Small", "Small", "Medium", "Large/Extra Large"]; 


}
var test;
var cart;
function renderCart()
{
    var cartString = localStorage.getItem("cartString") || "[]";
    cart = JSON.parse(cartString);
    console.log(cart)
    cart.forEach(function(cartItem) {
        var row = document.createElement("tr");
        var img1 = document.createElement("td");
        console.log("cart item: " + cartItem["color"]);
//        img1.innerHTML = "<p>Hello</p>";
        img1.src =  "./hw_6_assetts/harness_"+cartItem["color"]+".jpg"
        row.appendChild(img1);
       
//        console.log(row);
//        var name = document.createElement("td");
//        name.appendChild(this.color);
//        name.innerHTML = this.color;
//        row.appendChild(name);
//        console.log("this color" + this.color);
//        test = this.color;
//        var quantity = document.createElement("td");
//        quantity.innerHTML = this.quantity;
//        row.appendChild(quantity);
//        console.log(row);
//        var color = document.createElement("td");
//        color.innerHTML = this.color;
//        row.appendChild(color);
//        console.log(row);
//        var size = document.createElement("td");
//        size.innerHTML = this.size;
//        row.appendChild(size);
//        table.appendChild(row);
//        console.log(row);
        var tbl = document.getElementById("table");
        tbl.appendChild(row);
    });
    

}
//add to wish list

function addToWishList()
{
    alert('Your item has been added to your wish list!');    
    console.log('hello world console');
    
}
