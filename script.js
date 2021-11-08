let carts = document.querySelectorAll(".card-body");

let products = [
  {
    name: "Jordan Shorts",
    tag: "jordanShorts",
    price: 150,
    inCart: 0,
  },
  {
    name: "Nike Shoes",
    tag: "nikeshoes",
    price: 250,
    inCart: 0,
  },
  {
    name: "Nike Jarseys GSW",
    tag: "nikejarseysgsw",
    price: 50,
    inCart: 0,
  },
  {
    name: "Nike Jarseys LA Lakers",
    tag: "nikejarseyslalakers",
    price: 50,
    inCart: 0,
  },
  {
    name: "Nike Jarseys GSW Blue",
    tag: "nike jarseys gsw ",
    price: 50,
    inCart: 0,
  },
  {
    name: "Under back shorts",
    tag: "dadadadadad",
    price: 32,
    inCart: 0,
  },
  {
    name: "nike shorts white",
    tag: "dadadadada",
    price: 23,
    inCart: 0,
  },
  {
    name: "basketball black shorts",
    tag: "adadwfdwff",
    price: 87,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers();
  });
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  console.log(productNumbers);

  localStorage.setItem("cartNumbers", 1);
}
