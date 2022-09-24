
  let multiWordArray1 = ['e', 'd', 'f'];
  let multiWordArray2 = ['a', 'c', 'b'];
  let multiWordArray3 = ['m', 'o', 'n'];

  let multiWordArray = multiWordArray1.concat(multiWordArray2,multiWordArray3);

 function organizeMultiWordArray(array){
     const arr = [];
     array.sort();
     for (let a = 0; a < array.length; a++) {
         const element = array[a];
         arr.push(element);
     }
     return arr;
 }
 console.log(organizeMultiWordArray(multiWordArray));
 module.exports = organizeMultiWordArray;