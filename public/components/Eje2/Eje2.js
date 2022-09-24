let numberArray = [];
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function separateNumbers(array) {
    array = [[], []];
    array.forEach(element => {
        if (element % 2 == 0) {
            array[0].push(element);
        }
        else {
            array[1].push(element);
        }
    });
    return array;
}
console.log(separateNumbers(numberArray));
module.exports = separateNumbers;
