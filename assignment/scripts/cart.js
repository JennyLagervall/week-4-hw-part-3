console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const maxItems = 5
let basket = [];

function addItem(item) {
    if (isFull()) {
        return false;
    } else {
        basket.push(item);
        return true;

    }
}
addItem('pretzels');
addItem('Apples');
addItem('berries');
addItem('fruit');
addItem('cheese');
console.log('trying to add coffee', addItem('coffee'));
// addItem('tea');

console.log('should show items in basket array', basket)
console.log(`Basket is ${basket}`);

// end addItem

function listItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
listItems(basket)
// end listItems //

function empty(array) {
    array.length = 0;
    return;
}

// empty(basket);
// console.log('Basket array should be empty', basket.length);
// end part 1


function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else return true;
}

console.log('should be Full/true:', isFull());

// part 2 of this Q



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
} catch (e) {
    // Do nothing
}
