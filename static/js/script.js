const jsonFilePath = "./static/js/data.json";

//user list
let cartList = [];
let cartItemsCounter = 0;
let cartItemsContainerTag = document.querySelector("#cart_container");

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
    //initial cartList with ObjProducts: quantity = 0
    for (const product of Object.values(allProducts["products"])) {
      cartList.push(product);
    }
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

//test:
clearCart();
function clearCart() {
  while (cartItemsContainerTag.firstChild) {
    cartItemsContainerTag.removeChild(cartItemsContainerTag.firstChild);
  }
}

// //onStart the page:
// document.addEventListener("DOMContentLoaded", () => {
//   // Initially load products from local storage
//   loadProductsFromLocalStorage();
// });

// Add event listener for save button
document
.getElementById("save-to-local")
.addEventListener("click", saveProductsToLocalStorage);

// document.querySelector("#clear-local").addEventListener("click", ()=>{
//   //test Load:
  
//   // localStorage.clear();
//   // console.log("Local Storage has been cleared.");
// });

let buyIphoneTag = document.getElementById("buy-iphone");
let buyMacBookTag = document.getElementById("buy-mac");
let buyWatchTag = document.getElementById("buy-watch");
let butIphoneProTag = document.getElementById("buy-iphone-pro");
let buyWatch2Tag = document.getElementById("buy-watch-2");
let buyWatch3Tag = document.getElementById("buy-watch-3");
let buyAirPodsTag = document.getElementById("buy-airpods");
let buyFitnessTag = document.getElementById("buy-fitness");
let buyMacBookAirTag = document.getElementById("buy-mac-air");
let buyCardTag = document.getElementById("buy-card");
// let buyStreamTag = document.getElementsByClassName("buy-iphone");

// Object.values(buyItemsTag).forEach(element => {
//   element.addEventListener("click", () => {
//   let iphone = document.querySelector("#iphone");
//   iphone.style.visibility = "visible";

//   addItemToCart();
//   });
// });

//listeners:
// on the main page
let color = "default";
// buyIphoneTag.addEventListener("click", () => {
//   addItemToCart(buyIphoneTag.id, color);
// });
buyMacBookTag.addEventListener("click", () => {
  addItemToCart(buyMacBookTag.id, color);
});
buyWatchTag.addEventListener("click", () => {
  addItemToCart(buyWatchTag.id, color);
});
butIphoneProTag.addEventListener("click", () => {
  addItemToCart(butIphoneProTag.id, color);
});
buyWatch2Tag.addEventListener("click", () => {
  addItemToCart(buyWatch3Tag.id, color);
});
buyWatch3Tag.addEventListener("click", () => {
  addItemToCart(buyWatch3Tag.id, color);
});
buyAirPodsTag.addEventListener("click", () => {
  addItemToCart(buyAirPodsTag.id, color);
});
buyFitnessTag.addEventListener("click", () => {
  addItemToCart(buyFitnessTag.id, color);
});
buyMacBookAirTag.addEventListener("click", () => {
  addItemToCart(buyMacBookAirTag.id, color);
});
buyCardTag.addEventListener("click", () => {
  addItemToCart(buyCardTag.id, color);
});

// document.querySelector("#iphone-items-reset").addEventListener("click", () => {
//   resetItems();
// });

// document.querySelector("#iphone-plus").addEventListener("click", () => {
//   addItemToCart("iphone"); //title, type or id? //:TODO
// });

// document.querySelector("#iphone-minus").addEventListener("click", () => {
//   minusItemFromCart();
// });

// document.querySelector("#iphone-plus").addEventListener("click", () => {
//   addItemToCart("iphone"); //title, type or id? //:TODO
// });

// document.querySelector("#iphone-minus").addEventListener("click", () => {
//   minusItemFromCart();
// });

//itemId - id of the tag
function addItemToCart(itemId) {
  //color options
  let productToCart = null;

  switch (itemId) {
    case buyIphoneTag.id:
    case butIphoneProTag.id:
    case 2:
      //iphone pro
      productToCart = Object.values(allProducts)[0][1];
      break;

    case buyMacBookTag.id:
    case 4:
      //MacBook
      productToCart = Object.values(allProducts)[0][3];
      break;

    case buyWatchTag.id:
    case buyWatch3Tag.id:
    case 6:
      productToCart = Object.values(allProducts)[0][5];
      break;

    case buyAirPodsTag.id:
    case 7:
      productToCart = Object.values(allProducts)[0][6];
      break;

    case buyMacBookAirTag.id:
    case 3:
      productToCart = Object.values(allProducts)[0][2];
      break;

    //todo: Fitness, Card, Stream - is needed the Obj-data
    // case buyFitnessTag:
    //   productToCart = (Object.values(allProducts)[0][2]);
    //   break;

    default:
      productToCart = null;
      break;
  }

  //  "id": 1, "name": "iPhone 14",
  //  "id": 2, "name": "iPhone 14 Pro",
  //  "id": 3,  "name": "MacBook Air",
  //  "id": 4,"name": "MacBook Pro",
  //  "id": 5,"name": "iPad Pro",
  //  "id": 6, "name": "Apple Watch Series 8",
  //  "id": 7, "name": "AirPods Pro",

  console.log("CartList:");
  console.log(cartList);
  for (const productInTheCart of cartList) {
    if (productInTheCart.id === productToCart.id) {
      //add one more product
      productToCart.quantityInCart += 1;
    }
  }

  //replace a product with the new quantity
  cartList.map((product) => {
    if (product.id === productToCart.id) {
      //update counters in the cart:
      return { ...product, edition: productToCart.quantityInCart };
    }
    return cartList;
  });

  updateCartList();
}

function decreaseItems(id) {
  const product = cartList.find((product) => product.id === id);
  if (product && product.quantityInCart > 0) {
    product.quantityInCart -= 1;
  }
  return cartList;
}

function removeAllItemsCartList() {
  while (cartItemsContainerTag.firstChild) {
    cartItemsContainerTag.removeChild(cartItemsContainerTag.firstChild);
  }

  updateCartCounter();
}

function fillCartWithSavedProducts() {
  //when the page updates, the cart needs to be filled
}

function updateCartList() {
  removeAllItemsCartList();
  let iphoneCounterTag = document.querySelector("#cart-counter");
  iphoneCounterTag.textContent = cartList.length;

  //TODO: Bad Idea, working tempararly
  for (const product of cartList) {
    if (product.quantityInCart > 0) {
      let itemIntoTheCart = itemToTheCartBuilder(product);
      cartItemsContainerTag.appendChild(itemIntoTheCart);
      //add event listener to the item in the cart:
      // item-${product.id}-reset
      let resetItemTag = document.querySelector(`#item-${product.id}-reset`);
      resetItemTag.addEventListener("click", () => {
        //product quantity = 0 and remove Item from cartContainer
        updateQuantityToZero(product.id);
        cartItemsContainerTag.removeChild(itemIntoTheCart);
        updateCartCounter();
        updateTotalAmount();
      });

      let minusProductTag = document.querySelector(
        `#quantity-btn-${product.id}-minus`,
      );
      minusProductTag.addEventListener("click", () => {
        decreaseItems(product.id);
        updateCartList();
      });

      let plusProductTag = document.querySelector(
        `#quantity-btn-${product.id}-plus`,
      );
      plusProductTag.addEventListener("click", () => {
        //product quantity = 0 and remove Item from cartContainer
        addItemToCart(product.id);
      });
    }
  }

  updateCartCounter();
  updateTotalAmount();
}

function updateCartCounter() {
  let temp = 0;
  for (const product of cartList) {
    temp += product.quantityInCart;
  }

  cartItemsCounter = temp;
  document.querySelector("#cart-counter").textContent = cartItemsCounter;
}

function updateQuantityToZero(id) {
  const product = cartList.find((product) => product.id === id);

  if (product) {
    product.quantityInCart = 0;
  }
  return cartList;
}


//CartList save to Local Storage.
function saveProductsToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(cartList));
  alert("Products saved to local storage!");

  loadProductsFromLocalStorage();
}

// get saved products from local storage
function loadProductsFromLocalStorage() {
  alert("Retrieve data from LocalStorage");
  const storedProducts = localStorage.getItem("products");

  if (storedProducts) {
    cartList = JSON.parse(storedProducts);
    updateCartList();

    console.log("loadProductsFromLocalStorage");
    console.log(cartList); 
  } else {
    alert("No products found in local storage!");
  }
}

function itemToTheCartBuilder(product) {
  const element = document.createElement("div");
  element.innerHTML = `<li class="cart-item grid grid-cols-[30px_70px_120px_1fr] items-center gap-3 p-4 text-center">
          <button
            class="remove-button hover:text-white inline-flex h-5 w-5 items-center justify-center rounded-sm bg-bglightgray leading-none text-body hover:bg-activeblue">
            <svg id="item-${product.id}-reset" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="image max-w-16 rounded-md bg-bglightgray p-3">
          <img src="${product.img}" alt="${product.alt}" />
        </div>
          <div class="product-info flex flex-col gap-2 text-left">
            <div class="name">${product.name}</div>
            <div class="price">$${product.price}</div>
          </div>
          <div class="quantity">
            <button id="quantity-btn-${product.id}-minus"
              class="quantity-button-minus hover:text-white inline-block h-5 w-5 rounded-sm bg-bglightgray leading-none text-body hover:bg-activeblue">
              -
            </button>
            <span id="product-${product.id}-counter" class="inline-block h-5 min-w-5 rounded-sm px-1">${product.quantityInCart}</span>
            <button id = "quantity-btn-${product.id}-plus"
              class="quantity-button-plus hover:text-white inline-block h-5 w-5 rounded-sm bg-bglightgray leading-none text-body hover:bg-activeblue">
              +
            </button>
          </div>
        </li>`;

  element.id = `item-${product.id}-in-the-cart`;

  return element;
}

function updateTotalAmount() {
  let total = 0;
  for (const prod of cartList) {
    total += prod.quantityInCart * prod.price;
  }

  document.querySelector("#total-amount").textContent = `$` + total;
}

//checkout
function checkout() {}

function getFormInfo() {
  //combine the filled in user information for checkout
  //name
  //surname
  //etc
}
