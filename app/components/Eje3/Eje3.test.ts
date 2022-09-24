const funcion3 = require ("./Eje3");

test ("ejercicio3", ()=>{

    let multiWordArray1 = ['e', 'd', 'f'];
    let multiWordArray2 = ['a', 'c', 'b'];
    let multiWordArray3 = ['m', 'o', 'n'];

    let multiWordArray = multiWordArray1.concat(multiWordArray2, multiWordArray3);

        expect(funcion3(multiWordArray)).toEqual(multiWordArray);

})
