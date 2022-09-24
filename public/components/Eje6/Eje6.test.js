const funcion6 = require('./Eje6');
test("Ejercicio6", () => {
    let array3 = ["b", 6, "a", "q", 7, 2];
    expect(funcion6(array3)).not.toBe(array3);
});
