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
let cart = document.querySelector(".cart")
let cart_items = document.querySelector(".cartItems")
let cartList= document.querySelector(".cart-list")

let openCart = document.querySelector(".icon .cartIcon");
let closeCart = document.querySelector(".closeBtn");
let clear = document.querySelector(".clear")

let itemBox = document.querySelector(".item-box");
let removeItem = document.querySelectorAll(".delete-item")
let add_to_cart = Array.from(document.querySelectorAll(".addToCart"))
let shop_img = Array.from(document.querySelectorAll(".shopImg"))
//open & close cart
openCart.addEventListener('click' , function() {
    cart.classList.add('active');
}); 
closeCart.addEventListener('click' , function() {
    cart.classList.toggle('active');
}); 
//add to cart
add_to_cart.forEach((add) =>{
    add.addEventListener("click" , () =>{
        // create && add item box 
        let item_box = document.createElement("div")
        item_box.classList.add("item-box")
        cart_items.appendChild(item_box)
        // remove item 
        let delete_item = document.createElement("span")
        delete_item.classList.add("delete-item")
        delete_item.innerHTML = '<i class="fa-solid fa-trash"></i>'
        item_box.appendChild(delete_item)
        // delete item box 
        delete_item.addEventListener("click" , ()=> {
            delete_item.parentElement.remove()
        })
        // item img 
        let item_img = document.createElement("img")
        item_img.classList.add("item-img")
        item_img.src = add.parentElement.parentElement.getElementsByClassName("shopImg")[0].src
        item_box.appendChild(item_img)
        // item info 
        let item_info = document.createElement("div")
        item_info.classList.add("item-info")
        item_box.appendChild(item_info)
        // item name 
        let item_name = document.createElement("h4")
        item_name.classList.add("item-name") 
        item_name.innerHTML = add.parentElement.parentElement.getElementsByClassName("product-title")[0].innerText
        item_info.appendChild(item_name)
        // item price
        let price = document.createElement("p")
        let itemPrice = document.createElement("span")
        itemPrice.classList.add("item-price")
        itemPrice.innerHTML = add.parentElement.parentElement.getElementsByClassName("itemPrice")[0].innerText
        price.innerHTML = "price : " + itemPrice.innerHTML;
        item_info.appendChild(price)
        // item quantity
        let itemQuantity = document.createElement("input")
        itemQuantity.type = "number"
        item_info.appendChild(itemQuantity)
    })
})
