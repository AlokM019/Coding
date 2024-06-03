/**
You are working on an e-commerce website where customers can add items to their cart. The cart stores the quantity of each item that the customer wants to purchase in an array of numbers. However, the website is currently experiencing a bug where the quantity of each item is being recoreee incorrectly by reducing it to half. As a result, you need to writ a JavaScript function that can double the quantity of each item in the cart array to correct the bug.
 */

function doubleCart(cart){
   const correctedcart = cart.map(quantity => quantity*2);
   return correctedCart;
}

const cart = [1,2,4,3];
const correctedCart = doubleCart(cart);
console.log(correctedCart);
