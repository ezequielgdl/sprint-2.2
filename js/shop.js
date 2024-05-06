// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "Cooking Oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant Cupcake Mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];
const cartList = document.getElementById("cart_list");
const totalPrice = document.getElementById("total_price");
const productCount = document.getElementById("count_product");

let total = 0;

const handleProductCount = () => {
  const quantity = cart.reduce((acc, current) => acc + current.quantity, 0);
  productCount.innerText = quantity;
  return quantity;
};

// Exercise 1
function buy(id) {
  const productToBuy = products.find((product) => product.id === id);
  const existingProduct = cart.find((product) => product.id === id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    productToBuy.quantity = 1;
    cart.push(productToBuy);
  }

  handleProductCount();
}

// Exercise 2
function cleanCart() {
  cart = [];
  printCart();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total = cart.reduce((acc, product) => {
    return acc + applyPromotionsCart(product);
  }, 0);
  totalPrice.innerText = total.toFixed(2);
}

// Exercise 4
function applyPromotionsCart(product) {
  // Apply promotions to each item in the array "cart"
  if (product.offer && product.quantity >= product.offer.number) {
    discount = product.price * (product.offer.percent / 100);
    discountedPrice = product.price - discount;
    return discountedPrice * product.quantity;
  }

  return product.price * product.quantity;
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  cartList.innerHTML = "";

  cart.map((product) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
          <th scope="row">${product.name}</th>
          <td>$${product.price}</td>
          <td>${product.quantity}</td>
          <td>${applyPromotionsCart(product).toFixed(2)}</td>
          <td>
          <button class="btn btn-light border" onclick="removeFromCart(${
            product.id
          })">
          <i class="fas fa-minus"></i>
          </button>
          </td>
      `;
    cartList.appendChild(newRow);
  });
  handleProductCount();
  calculateTotal();
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  const index = cart.findIndex((product) => product.id === id);
  if (index !== -1) {
    cart[index].quantity > 1
      ? (cart[index].quantity -= 1)
      : cart.splice(index, 1);
  }
  printCart();
}

function open_modal() {
  printCart();
}
