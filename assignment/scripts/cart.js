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
const maxItems = 5

function isFull(numItems){
if(numItems < maxItems){
    return false;
} else if(numItems >= maxItems){
    return true;
}
}
console.log('should be true', isFull(5))
console.log('should be false', isFull(2))
console.log('should be true', isFull(10))

// part 2 of this Q

function addItem(item){
    basket.push(item);
    return true;
    }
    addItem('pretzels')

//Update the required addItem function to:
//Use the isFull function to prevent more than maxItems from being added to the basket.
//If an item was added to the array, return true
//If there was no room and the item could not be added return false






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
