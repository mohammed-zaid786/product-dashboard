const prices = [1000, 2000, 3000, 4000];

const doubledPrices = prices.map((price) => price * 2);

const expensiveProducts = prices.filter((price) => price > 2000);

const totalPrice = prices.reduce((total, price) => total + price, 0);

console.log("Doubled:", doubledPrices);
console.log("Expensive:", expensiveProducts);
console.log("Total:", totalPrice);