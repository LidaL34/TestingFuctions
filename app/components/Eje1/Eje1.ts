let WordArrayA: string [] = [];
    WordArrayA = ['a','b','c'];

let WordArrayB: string [] = [];
    WordArrayB = ['e','f','g'];

    function joinArray(array1, array2){
        let arraySize = array1.length + array2.length
        let array= [];
        for (let a = 0; a < arraySize; a++) {
            if(array1[a] !== undefined){
                array.push(array1[a]);
            }
            if(array2[a] !== undefined){
                array.push(array2[a]);
            }
        }
        return array;
    }
    
    console.log(joinArray(WordArrayA, WordArrayB));

    module.exports = joinArray;