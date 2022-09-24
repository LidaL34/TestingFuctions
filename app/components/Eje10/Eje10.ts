interface result {
    dado1: number;
    dado2: number;
    suma:number;
}
  function dados(){
    const dadoA = Math.floor(Math.random()*6);
    const dadoB = Math.floor(Math.random()*6);
    let result: result;
    return result = {
        dado1: dadoA,
        dado2: dadoB,
        suma: dadoA + dadoB
    };
 }
console.log(dados);

module.exports = dados;