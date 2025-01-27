class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of the item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to get the total number of items in the cart
    getTotalItems() {
        return this.items.length;
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        const existingItemIndex = this.items.findIndex(item => item.product.id === product.id);
        if (existingItemIndex !== -1) {
            this.items[existingItemIndex].quantity += quantity;
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to display the items in the cart
    displayCartItems() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
    }
}
// Create products
const product1 = new Product(1, 'Apple', 0.5);
const product2 = new Product(2, 'Banana', 0.3);
const product3 = new Product(3, 'Orange', 0.7);

const cart = new ShoppingCart();

// Add items to cart
cart.addItem(product1, 3);
cart.addItem(product2, 5);
cart.addItem(product3, 2);

// Display the cart
console.log('Items in the cart:');
cart.displayCartItems();

// Remove item from cart
cart.removeItem(2);

console.log('Items in the cart after removing product 2:');
cart.displayCartItems();

