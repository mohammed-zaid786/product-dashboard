export function getFirstItem<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirstItem([10, 20, 30]);
const firstName = getFirstItem(["Laptop", "Phone", "Tablet"]);

console.log(firstNumber);
console.log(firstName);
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = {
  value: 100,
};

const stringBox: Box<string> = {
  value: "Laptop",
};

function getObjectKey<T extends object>(obj: T): T {
  return obj;
}

const product = getObjectKey({
  id: 1,
  name: "Laptop",
});

console.log(numberBox);
console.log(stringBox);
console.log(product);