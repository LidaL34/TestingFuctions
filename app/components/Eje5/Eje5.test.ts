const funcion5 = require ("./Eje5");

test ('Ejercicio5', ()=> {
    
    let wordArray1: string [] = [];
        wordArray1 = ['casa', 'perro', 'cocodrilo', 'capibara'];

    let wordArray2: string [] = [];
        wordArray2 = ['casa', 'cocodrilo', 'capibara', 'perro'];

    expect (funcion5(wordArray1,wordArray2)).not.toEqual('No son iguales!');
});