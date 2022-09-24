const funcion1 = require ("./Eje1");

test("ejercicio 1", () =>{

    let WordArrayA: string [] = [];
    WordArrayA = ['a','b','c'];

    let WordArrayB: string [] = [];
    WordArrayB = ['e','f','g'];
    
    let arrayFinal = ['a','e','b','f','c','g']


    expect(funcion1(WordArrayA,WordArrayB)).toEqual(arrayFinal);
})