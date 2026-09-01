function fetchProduct(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Product data loaded");
    }, 1000);
  });
}

async function loadProduct() {
  const result = await fetchProduct();
  console.log(result);
}

loadProduct();