let wordArray1: string [] = [];
    wordArray1 = ['casa', 'perro', 'cocodrilo', 'capibara'];

 let wordArray2: string [] = [];
    wordArray2 = ['casa', 'cocodrilo', 'capibara', 'perro'];

 function checkSimilarities(array1, array2){
    array1.sort();
    array2.sort();
   
    if(array1.length==array2.length && array1.every(function(v,i) { return v === array2[i]; })){
        return 'Son iguales!';
    }else{
        return 'No son iguales';
    }
 }

 module.exports = checkSimilarities;