const jsonFilePath = './static/js/data.json';

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
    console.log(allProducts["products"]);
    for (const product of Object.values(allProducts["products"])) {
      cartList.push(product);
    }  
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

//test:
clearCart();
// hideCartItems();

let buyIphoneTag = document.getElementById("buy-iphone"); 
let buyMacBookTag = document.getElementById("buy-mac");
let buyWatchTag = document.getElementById("buy-watch"); 
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


//listeners:
// on the main page
let color = "default";
buyIphoneTag.addEventListener("click", () => {
  addItemToCart(buyIphoneTag.id, color);
});
buyMacBookTag.addEventListener("click", () => {
  addItemToCart(buyMacBookTag.id, color);
});
buyWatchTag.addEventListener("click", () => {
  addItemToCart(buyWatchTag.id, color);
});
buyWatch2Tag.addEventListener("click", () => {
  addItemToCart(buyWatch2Tag.id, color);
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
function addItemToCart(itemId, color) { 
  let productToCart = null;
  let quantityInCart = 0;

  switch (itemId) {
    case buyIphoneTag.id:
      //iphone pro
      productToCart = (Object.values(allProducts)[0][1]);
      break;


function addItemToCart() {
  //item
  //test
  let iphone = Object.values(allProducts)[0][0];
  iphone.color = "GRERER";
  alert(iphone);

      case buyMacBookTag.id:
        //MacBook
        productToCart = (Object.values(allProducts)[0][3]);
        break;

        case buyWatchTag.id:
          productToCart = (Object.values(allProducts)[0][5]);
          break;

          case buyAirPodsTag.id:
            productToCart = (Object.values(allProducts)[0][6]);
            break;


            case buyMacBookAirTag:
              productToCart = (Object.values(allProducts)[0][2]);
              break;
  

              //todo: Fitness, Card, Stream - is needed the Obj-data
              case buyMacBookAirTag:
                productToCart = (Object.values(allProducts)[0][2]);
                break;
    


    default: 
    productToCart = null;
    console.log("Other products");
      break;
  }

  //  "id": 1, "name": "iPhone 14",
  //  "id": 2, "name": "iPhone 14 Pro", 
  //  "id": 3,  "name": "MacBook Air",
  //  "id": 4,"name": "MacBook Pro",
  //  "id": 5,"name": "iPad Pro",
  //  "id": 6, "name": "Apple Watch Series 8",
  //  "id": 7, "name": "AirPods Pro",


  for (const productInTheCart of cartList) {

    if (productInTheCart.id === productToCart.id) {
      console.log("Proudct is already in the cart.");
      //add one more product
      productToCart.quantityInCart += 1;
      console.log(cartList);
    }
  }
  

  //replace a product with the new quantity
  cartList.map((product) => {
    if (product.id === productToCart.id) {
      return { ...product, edition: productToCart.quantityInCart };  
    }
    return cartList;
  });
 
  console.log("cartList");
  console.log(cartList);
  updateCartList();
}

function minusItemFromCart() {
  //todo find the Item in cartList and remove it

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


function fillCartWithSavedProducts() {
  //when the page updates, the cart needs to be filled
}

function updateCartList() {
  // console.log(cartList.length);
  let iphoneCounterTag = document.querySelector("#cart-counter");
  iphoneCounterTag.textContent = cartList.length;
 
  //TODO: Bad Idea, working tempararly
  //svg: product-item-reset
  //quantity-btn-plus
  //quantity-btn-minus
  const element = document.createElement('div');
  element.innerHTML = `<li class="cart-item grid grid-cols-[30px_70px_120px_1fr] items-center gap-3 p-4 text-center">
          <button
            class="remove-button hover:text-white inline-flex h-5 w-5 items-center justify-center rounded-sm bg-bglightgray leading-none text-body hover:bg-activeblue">
            <svg id="iphone-items-reset" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="image max-w-16 rounded-md bg-bglightgray p-3">
            <img src="static/img/product_1/product-phone-14-pro.jpg" alt="product-phone-14-pro" />
          </div>
          <div class="product-info flex flex-col gap-2 text-left">
            <div class="name">iPhone 14 Pro</div>
            <div class="price">$0.00</div>
          </div>
          <div class="quantity">
            <button id="iphone-minus"
              class="quantity-button-minus hover:text-white inline-block h-5 w-5 rounded-sm bg-bglightgray leading-none text-body hover:bg-activeblue">
              -
            </button>
            <span id="iphone-counter" class="inline-block h-5 min-w-5 rounded-sm px-1">1</span>
            <button id = "iphone-plus"
              class="quantity-button-plus hover:text-white inline-block h-5 w-5 rounded-sm bg-bglightgray leading-none text-body hover:bg-activeblue">
              +
            </button>
          </div>
        </li>`;

  cartItemsContainerTag.appendChild(element);
  updateCartCounter();
}

function updateCartCounter() {
  let temp = 0;
  for (const product of cartList) {
    temp += product.quantityInCart;
  }

  cartItemsCounter = temp;
  document.querySelector("#cart-counter").textContent = cartItemsCounter;
}

function clearCart() {
  while (cartItemsContainerTag.firstChild) {
    cartItemsContainerTag.removeChild(cartItemsContainerTag.firstChild);
  }
}

function hideCartItems() {
  // console.log("Hide Items");
  for (const child of cartTag.children) {
    // console.log(child);
    child.style.visibility = "hidden";
  }
    console.log("Hide Items");
    for (const child of cartItemsContainerTag.children) {
      console.log(child);
      child.style.visibility =  "hidden";
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

//checkout
function checkout() {
  
}

function getFormInfo() {
  //combine the filled in user information for checkout
  
  //name
  //surname
  //etc

}

