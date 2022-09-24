let array3 = ["b", 6, "a", "q", 7, 2];

 function organizeArray(array) {
    array = array
    let newArray = [];
    array = array.filter(number => Number.isInteger(number));
    array = array.filter(string => !Number.isInteger(string))
    array.sort();
    array.sort();
    array.forEach(element => {
        newArray.push(element);
    });
    array.forEach(element => {
        newArray.push(element);
    });
    return newArray;
 }

 console.log(organizeArray(array3))

 module.exports = organizeArray;