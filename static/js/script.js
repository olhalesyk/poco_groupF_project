const jsonFilePath = './static/js/data.json';

let cartList = null;
let cartItemsCounter = 0;
let cartTag = document.querySelector("#cart_container");

//test:
clearCart();


let itemsOnThePage = document.getElementsByClassName("buy"); 
console.log(itemsOnThePage[0]);

itemsOnThePage[0].addEventListener("click", () => {
  addItemToCart();
});

fetch(jsonFilePath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch JSON');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
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


function addItemToCart(item) {
  
}

function removeItemFromCart(item) {
  
}

function hideTopNavPanel() {
  
}

updateCartList();

function updateCartList() {
  
}

function clearCart() {
  while (cartTag.firstChild) {
    cartTag.removeChild(cartTag.firstChild);
  }
}


function updateCartCounter() {
  document.querySelector("#cart-counter").textContent = cartItemsCounter;
}