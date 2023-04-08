console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
partsNeeded=40

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
supplyChanges = [3, 5, -6, 0, 7, 11]

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:', supplyChanges.pop());

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.', supplyChanges.push(25));

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');

for (let index = 0; index<=supplyChanges.length-1;index++){
    if (supplyChanges[index] > 0) {
        console.log(`Added ${supplyChanges[index]} parts`);
    } else if (supplyChanges [index] == 0){
        console.log('no change');
    } else {
        console.log(`Removed ${supplyChanges[index]} parts`);
    }
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for (let supply of supplyChanges){ // for each item of supply changes, label it now as supply as we go.
    if (supply > 0){ //where each item is greater than zero
        console.log(`Added ${supply} parts`);
    } else if (supply == 0){
        console.log('no change');
    } else {
        console.log(`Removed ${supply} parts`);
    }
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
let sum = 0;

supplyChanges.forEach(item => {
    sum += item;
});

console.log(`8. Total supplies available is: ${sum}`);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');

let emptyBoxes=[]
let i=572
while (i>7){
    emptyBoxes.push(7)
    i-=7
};
console.log(`After dividing up the 572 parts, we filled ${emptyBoxes.length} boxes, with a remainder of ${i} parts.`)


