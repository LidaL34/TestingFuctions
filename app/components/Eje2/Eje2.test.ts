const funcion2 = require ("./Eje2");

test("ejercicio 2", () => {

    let numberArray: number [] = [];
     numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

     expect(funcion2(numberArray)).not.toEqual([2,4,6,8,10]);
})