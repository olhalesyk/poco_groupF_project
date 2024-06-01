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
// hideCartItems();

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

  addItemToCart();
  });
});


//listeners:
document.querySelector("#iphone-items-reset").addEventListener("click", () => {
  resetItems();
});

document.querySelector("#iphone-plus").addEventListener("click", () => {
  addItemToCart();
});

document.querySelector("#iphone-minus").addEventListener("click", () => {
  minutItemFromCart();
});


function addItemToCart() { //item
  console.log("ADD the item");
  console.log(Object.values(allProducts)[0][0]);;

  cartList.push(Object.values(allProducts)[0][0]);
  updateCartList();
}

function minutItemFromCart() {
  cartList.pop();
  updateCartList();
}

function decreaseItems() {
   
}

// function increaseItems() {
//   addItemToCart();
// }

function resetItems() {

  saveToLocalStorage();
  getTitle();

  cartList.length = 0;
  console.log(cartList);
  console.log("List is reset.");

 
  updateCartList();
}

function updateCartList() {
  let iphoneCounterTag = document.querySelector("#iphone-counter");
  iphoneCounterTag.textContent = cartList.length;

  console.log(cartList);
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
















//TODO: Local Storage.

function saveToLocalStorage() {
  //JSON: to the localStorage
  // const userObj = {
  //   username = "Maria",
  //   email: "maria@mail.com"
  // }
  // localStorage.setItem('user', JSON.stringify(userObj))
  
  localStorage.setItem('cart', JSON.stringify(cartList[0]));
  console.log(cartList);
  alert("Cart is saved.");
}

function getTitle() {
    let getFromLocal = localStorage.getItem("cart");
    console.log("getFromLocal:");
    console.log(getFromLocal);

if (getFromLocal) {
  const jsonFromLocal = JSON.parse(getFromLocal)
    alert(getFromLocal);
    console.log(jsonFromLocal);

} else {
  console.log('User data not found in local storage')
}


}

