const products = [
  { id: 1, name: "Apple", category: "Fruit", price: 10000, emoji: "🍎" },
  { id: 2, name: "Burger", category: "Fast Food", price: 30000, emoji: "🍔" },
  { id: 3, name: "Coffe", category: "Drink", price: 20000, emoji: "💁" },
  { id: 4, name: "Pizza", category: "Fast Food", price: 50000, emoji: "🍕" },
  { id: 5, name: "Donut", category: "Snack", price: 25000, emoji: "🍩" },
];

const productList = document.querySelector("#product-list");

const getCategoryClass = (category) => {
  switch (category) {
    case "Fruit":
      return "fruit";

    case "Fast Food":
      return "fast-food";

    case "Drink":
      return "drink";

    case "Snack":
      return "snack";

    default:
      return "default";
  }
};

products.forEach((product) => {
  const card = document.createElement("div");

  //   const categoryClass = getCategoryClass(product.category);
  const categoryMap = {
    Fruit: "fruit",
    "Fast Food": "fast-food",
    Drink: "drink",
    Snack: "snack",
  };
  card.classList.add("card", categoryMap[product.category]);

  card.innerHTML = `
        <div class="emoji">${product.emoji}</div>
        <h2>${product.name}</h2>
        <p>${product.category}</p>
        <span>Rp. ${product.price.toLocaleString()}</span>
  `;

  productList.appendChild(card);
});
