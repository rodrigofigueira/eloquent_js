function quadrado(a){ return a * a;}
console.log(quadrado(2, true, {}, 'Text'));

function divisao(a, b = 1){
    return a/b;
}
console.log(divisao(2));
console.log(divisao(8,2));

function encapsularValor(a){
    let valorEncapsulado = a;
    return () => valorEncapsulado;
}

let valorEncapsulado = encapsularValor(999);
console.log(valorEncapsulado());
