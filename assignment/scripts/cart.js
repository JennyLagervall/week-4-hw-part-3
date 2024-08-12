console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
basket.push(item);
return true;
}
addItem('pretzels')

console.log('should show items in basket array', basket)
console.log(`Basket is ${basket}`);
// end addItem

function listItems(array){
    for (let i = 0; i < array.length; i++)
        console.log(array[i]) 
}
// end listItems

function empty(array){
    while(array.length > 0){
        array.pop();
    }
}
empty(basket);
console.log('Basket array should be empty', basket);
// end part 1

Add a global const named maxItems and set it to 5.

Create a function called isFull(). It should:

return false if the basket contains less than max number of items
return true otherwise (equal or more than maxItems)
Update the required addItem function to:
Use the isFull function to prevent more than maxItems from being added to the basket.
If an item was added to the array, return true
If there was no room and the item could not be added return false






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
