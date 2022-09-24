function factorial(number) {
    let total = 1;
    for (let a = 1; a < number; a++) {
        total = total * a;
    }
    return total;
}
console.log(factorial(4));
module.exports = factorial;
