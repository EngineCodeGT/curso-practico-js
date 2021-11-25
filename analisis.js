const salariosGt = gt.map(
    function(persona){
        return persona.salary;
    }
);

const salariosGtSorted = salariosGt.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;


    }
);

function esPar(numero){
    return (numero % 2 === 0);
}

function medianaSalarios(lista){
    const mediana = medianaA(lista);
    return mediana;
}

function promedio(lista){
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });

    const promedio = sumaLista / lista.length;
    return promedio;
}

function medianaA(lista){

    const mitad = parseInt(lista.length / 2)
    let mediana = 0 

    if(esPar(lista.length))
    {
        mediana = promedio([lista[mitad-1], lista[mitad]]);
    }else{
        mediana = lista[mitad]
    }
    return mediana;
}

const medianaGeneral = medianaSalarios(salariosGtSorted);
console.log(medianaGeneral)

// Mediana del top 10%
const spliceStart = ( salariosGtSorted.length * 90) / 100;
const spliceCount = salariosGtSorted.length - spliceStart;

const salarioTop10 = salariosGtSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salarioTop10);
console.log(medianaTop10);
