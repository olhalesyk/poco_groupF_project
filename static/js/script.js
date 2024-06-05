// import Parallax from "parallax-js";
const jsonFilePath = "./static/js/data.json";

// Iphone possible options
// ["Black", "White", "Blue", "Red", "Green"]
// ["128GB", "256GB", "512GB"]
//Apple objects
let allProducts = null;
fetch(jsonFilePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch JSON");
    }
    return response.json();
  })
  .then((data) => {
    allProducts = data;
    // console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

//user list
let cartList = [];
let cartItemsCounter = 0;
let cartTag = document.querySelector("#cart_container");

//test:
// clearCart();
hideCartItems();

let buyItemsTag = document.getElementsByClassName("buy");

Object.values(buyItemsTag).forEach((element) => {
  element.addEventListener("click", () => {
    let iphone = document.querySelector("#iphone");
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
  minusItemFromCart();
});

function addItemToCart() {
  //item
  //test
  let iphone = Object.values(allProducts)[0][0];
  iphone.color = "GRERER";
  alert(iphone);

  cartList.push(Object.values(allProducts)[0][0]);
  updateCartList();
}

function minusItemFromCart() {
  //send ID of the product

  // let cartCounterTag = document.querySelector(id+"-counter");
  // let counter = cartCounterTag.textContent;
  // cartCounterTag.textContent = counter - 1;

  cartList.pop();
  updateCartList();
}

function decreaseItems() {}

function resetItems() {
  saveToLocalStorage();
  getTitle();

  cartList.length = 0;

  updateCartList();
}

function updateCartList() {
  let iphoneCounterTag = document.querySelector("#iphone-counter");
  iphoneCounterTag.textContent = cartList.length;

  // console.log(cartList);
  cartList.forEach((element) => {
    // if (cartList.count > 0) {
    //   // showTheItemWithColor
    // }
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
  // console.log("Hide Items");
  for (const child of cartTag.children) {
    // console.log(child);
    child.style.visibility = "hidden";
  }
}

//TODO: Local Storage.

function saveToLocalStorage() {
  //JSON: to the localStorage
  // const userObj = {
  //   username = "Maria",
  //   email: "maria@mail.com"
  // }
  // localStorage.setItem('user', JSON.stringify(userObj))

  localStorage.setItem("cart", JSON.stringify(cartList[0]));
  // console.log(cartList);
  alert("Cart is saved.");
}

function getTitle() {
  let getFromLocal = localStorage.getItem("cart");
  console.log("getFromLocal:");
  console.log(getFromLocal);

  if (getFromLocal) {
    const jsonFromLocal = JSON.parse(getFromLocal);
    alert(getFromLocal);
    console.log(jsonFromLocal);
  } else {
    console.log("User data not found in local storage");
  }
}

/* Parallax effect */
/* document.addEventListener("DOMContentLoaded", function () {
  const parallaxWatchImage = document.getElementById("parallaxWatch");
  if (parallaxWatchImage && typeof SimpleParallax !== "undefined") {
    console.log("Parallax image element found:", parallaxWatchImage);
    new SimpleParallax(parallaxWatchImage);
    console.log("Parallax effect applied");
  } else {
    console.error(
      "Parallax image element not found or SimpleParallax library not loaded",
    );
  }
}); */

const parallaxWatchImageContainer = document.getElementById("parallaxInner");
const parallaxInstance = new Parallax(parallaxWatchImageContainer);
