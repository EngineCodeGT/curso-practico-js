// codigo del cuadrado

function perimetroCuadrado(lado){
    return  lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
} 

// codigo del triangulo
// const ladoTrinagulo1 = 6;
// const ladoTrinagulo2 = 6;
// const baseTrinagulo = 4;
// const alturaTringulo = 5.5;

function perimetroTrinagulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function alturaTriangulo(lado, base){
    const c = (lado*lado) - (base * base / 4);
    const altura = Math.sqrt(c)
    return altura;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// codigo del circulo
// const radioCirculo = 4;
// const diametro = 2 * radioCirculo;
// const PI = Math.PI;

function diametroCirculo(radio)
{
    return radio * 2;
}

function circunferencia (radio) {
    const diametro = diametroCirculo(radio);
    return Math.PI * diametro;
}

function areaCirculo (radio) {
    return Math.PI * (radio * radio);
}

// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const lado = parseFloat(input.value);
    const resultado = perimetroCuadrado(lado);

    const inputResultado = document.getElementById("resultadoCuadrado");
    inputResultado.value = resultado;
}
function calcularAreaCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const lado = parseFloat(input.value);
    const resultado = areaCuadrado(lado);

    const inputResultado = document.getElementById("resultadoCuadrado");
    inputResultado.value = resultado;
}
// Tringulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("lado1");
    const lado1 = parseFloat(input1.value);
    const input2 = document.getElementById("lado2");
    const lado2 = parseFloat(input2.value);
    const inputb = document.getElementById("base");
    const base = parseFloat(inputb.value);

    const resultado = perimetroTrinagulo(lado1, lado2, base);

    const inputResultado = document.getElementById("resultadoTriangulo");
    inputResultado.value = resultado;

}
function calcularAreaTriangulo(){
    const inputb = document.getElementById("base");
    const base = parseFloat(inputb.value);
    const inputa = document.getElementById("altura");
    const altura = parseFloat(inputa.value);

    const resultado = areaTriangulo(base, altura);

    const inputResultado = document.getElementById("resultadoTriangulo");
    inputResultado.value = resultado;
}
// Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const radio = parseFloat(input.value);

    const resultado = circunferencia(radio);

    const inputResultado = document.getElementById("resultadoCirculo");
    inputResultado.value = resultado;
}
function calcularAreaCirculo(){
    const input = document.getElementById("radio");
    const radio = parseFloat(input.value);

    const resultado = areaCirculo(radio);

    const inputResultado = document.getElementById("resultadoCirculo");
    inputResultado.value = resultado;
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("lado1");
    const lado1 = parseFloat(input1.value);
    const input2 = document.getElementById("lado2");
    const lado2 = parseFloat(input2.value);
    const inputb = document.getElementById("base");
    const base = parseFloat(inputb.value);

    if(lado1 == lado2)
    {
        const resultado = alturaTriangulo(lado1, base);

        const inputResultado = document.getElementById("altura");
        inputResultado.value = resultado;
    }else{
        alert("El lado A y B no son del mismo tamaño")
    }
}