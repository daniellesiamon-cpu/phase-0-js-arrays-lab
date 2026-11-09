// Task 2: Create the Product Inventory Array
const products = ["laptop", "phone", "headphones", "monitor"];

// Task 3: Access Product Information (Must be named logFirstProduct)
function logFirstProduct() {
  console.log(products[0]);
}

// Task 4: Add a Product
function addProduct(productName) {
  products.push(productName);
}

// Task 5: Update Product Information
function updateProductName(index, newName) {
  products[index] = newName;
}

// Task 6: Remove a Product
function removeLastProduct() {
  products.pop();
}

// Exporting functions and array for Jest testing
module.exports = {
  products,
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct
};