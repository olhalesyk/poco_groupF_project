const jsonFilePath = './static/js/data.json';

//Apple objects 
let allProducts = null;
fetch(jsonFilePath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch JSON');
    }
    return response.json();
  })
  .then(data => {
    allProducts = data;
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  }); 



//user list
let cartList = [];
let cartItemsCounter = 0;
let cartTag = document.querySelector("#cart_container");

//test:
// clearCart();
hideCartItems();

let buyItemsTag = document.getElementsByClassName("buy"); 
// console.log(buyItemsTag.length);
// console.log(buyItemsTag);

Object.values(buyItemsTag).forEach(element => {
  // console.log(element);
  
  element.addEventListener("click", () => {
  console.log("Add to the cart");
  let iphone = document.querySelector("#iphone"); 
  console.log(iphone);
  iphone.style.visibility = "visible";
  });
});


let localTest = "";

saveToLocalStorage();
getTitle();


function saveToLocalStorage() {
    let title = document.querySelector("h1").textContent;
    localStorage.setItem("title", title);
    // alert("Title is saved.");
}

function getTitle() {
    let getLocalTitle = localStorage.getItem("title");
    // alert(getLocalTitle);
}


function addItemToCart() { //item
  
  cartList.push("Hello");
  updateCartList();
}

function removeItemFromCart(item) {
  
}


function updateCartList() {
  
  cartList.forEach(element => {
    
  });
  
  updateCartCounter();
}



function updateCartCounter() {
  cartItemsCounter = cartList.length;
  document.querySelector("#cart-counter").textContent = cartItemsCounter;
}

function clearCart() {
  while (cartTag.firstChild) {
    cartTag.removeChild(cartTag.firstChild);
  }
}

function hideCartItems() {
    console.log("Hide Items");
    for (const child of cartTag.children) {
      console.log(child);
      child.style.visibility =  "hidden";
    }
}

function hideTopNavPanel() {
  
}
