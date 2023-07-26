let i = 0; //start point

let images = [];

images[0] = "img/slide/1.png";
images[1] = "img/slide/2.png";
images[2] = "img/slide/3.png";
images[3] = "img/slide/4.png";

function changeImg() {
    document.getElementById("homeImg").src = images[i];

    if( i < images.length - 1) {
        i++;
    }else{i = 0;}
}


window.onload = function(){
    document.querySelector(".home .info").style.cssText = "left:0;"
    document.querySelector("#homeImg").style.cssText = "transform: scale(100%);"
} 

// fearured product 

document.querySelectorAll(".subImg-1").forEach(image1 =>{
    image1.addEventListener("click" , () => {
        document.querySelector(".bigImg-1").src = image1.src;
    })
})
document.querySelectorAll(".subImg-2").forEach(image2 =>{
    image2.addEventListener("click" , () => {
        document.querySelector(".bigImg-2").src = image2.src;
    })
})
document.querySelectorAll(".subImg-3").forEach(image3 =>{
    image3.addEventListener("click" , () => {
        document.querySelector(".bigImg-3").src = image3.src;
    })
})
document.querySelectorAll(".subImg-4").forEach(image4 =>{
    image1.addEventListener("click" , () => {
        document.querySelector(".bigImg-1").src = image4.src;
    })
})

//navbar 
let toggler = document.querySelector(".toggle");
let navbar = document.querySelector(".navbar");

toggler.addEventListener('click' , function() {
    toggler.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})

//cart
let cart = document.querySelector(".cart-list");

let openCart = document.querySelector(".cartIcon");
let closeCart = document.querySelector(".closeBtn");

let itemBox = document.querySelector(".item-box");
let itemPrice = document.querySelector(".item-price");
let itemQuantaty = document.querySelector(".item-quantity");
let removeItem = document.querySelector(".delete-item");

let totalPrice = document.querySelector(".totalAmount");
let buyBtn = document.querySelector(".buyBtn");

let productBox = document.querySelectorAll("#product .box") 
//open cart
openCart.addEventListener('click' , function() {
    cart.classList.add('active');
});
// close cart 
closeCart.addEventListener('click' , function() {
    cart.classList.toggle('active');
})
//remove item from cart
removeItem.addEventListener("click", function() {
    itemBox.remove()
});
//add to cart

productBox.forEach((box) => {
    box.addEventListener('click' , (e) =>{
        
    })
})