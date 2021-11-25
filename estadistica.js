
function promedio(lista){
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista += parseFloat(lista[i]);
    // }

    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });

    const promedio = sumaLista / lista.length;
    return promedio;
}

function esPar(numero){
    return numero % 2 === 0 ? true: false;
}

function mediana(lista){
    lista.sort(function(a,b){
        return a - b;
    });

    const mitad = parseInt(lista.length / 2)
    let mediana = 0 

    if(esPar(lista.length))
    {
        mediana = promedio([lista[mitad-1], lista[mitad]]);
    }else{
        mediana = lista[mitad]
    }
    console.log(lista);
    return mediana;
}
const elementos = {}

function moda(lista)
{
    lista.map( function (elemento) {
        if(elementos[elemento])
        {
            elementos[elemento] += 1;
        }else{
            elementos[elemento] = 1;
        }
    });

    const array = Object.entries(elementos).sort(function (acumulado,nuevo) {
        return acumulado[1] - nuevo[1]
    });
    return array[array.length - 1];
}
