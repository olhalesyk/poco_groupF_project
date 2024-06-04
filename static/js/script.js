const jsonFilePath = './static/js/data.json';

// Iphone possible options
// ["Black", "White", "Blue", "Red", "Green"]
// ["128GB", "256GB", "512GB"]
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
    // console.log(data);
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

 



document.querySelector("#iphone-items-reset").addEventListener("click", () => {
  resetItems();
});

document.querySelector("#iphone-plus").addEventListener("click", () => {
  addItemToCart("iphone"); //title, type or id? //:TODO
});

document.querySelector("#iphone-minus").addEventListener("click", () => {
  minusItemFromCart();
});

document.querySelector("#iphone-plus").addEventListener("click", () => {
  addItemToCart("iphone"); //title, type or id? //:TODO
});

document.querySelector("#iphone-minus").addEventListener("click", () => {
  minusItemFromCart();
});


function addItemToCart(itemId, color) { //item

  let product = null;

  switch (itemId) {
    case buyIphoneTag.id:
      //iphone pro
      productToCart = (Object.values(allProducts)[0][1]);
      break;

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
  
    default: 
    product = null;
    console.log("Other products");
      break;
  }



  cartList.push(product);
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

function decreaseItems() {
   
}

 
function resetItems() {

  saveToLocalStorage();
  getTitle();

  cartList.length = 0;

  updateCartList();
}

function updateCartList() {
  let iphoneCounterTag = document.querySelector("#iphone-counter");
  iphoneCounterTag.textContent = cartList.length;

  console.log("Updated cartList:");
  console.log(cartList);
  cartList.forEach(element => { 
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
    console.log("Hide Items");
    for (const child of cartTag.children) {
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



//checkout
function checkout() {
  
}

function getFormInfo() {
  //combine the filled in user information for checkout
  
  //name
  //surname
  //etc

}