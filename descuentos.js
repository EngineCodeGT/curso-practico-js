const cupones = [
    "Batman",
    "Superman",
    "Lobo"
]

function precioConDescuento(precio, descuento){
    const porcentajeDescuento = 100 - descuento;
    const resultado = (precio * porcentajeDescuento) / 100;
    return resultado
}

function calcularPrecioConDescuento(){
    const inputPrecio = document.getElementById("precio")
    const precio = parseFloat(inputPrecio.value);
    const inputCupon = document.getElementById("cupon")
    const cupon = parseFloat(inputCupon.value);

    let descuento;

    switch (cupon){
        case cupones[0]: 
            descuento = 20;
            break;
        case cupones[1]: 
            descuento = 25;
            break;
        case cupones[2]: 
            descuento = 30;
            break;
        default:
            descuento = 10;
            break;
    }

    const resultado = precioConDescuento(precio, descuento);

    const presultado = document.getElementById("resultado");
    presultado.innerText = "El precio de su producto con descuento es: $"+resultado;
}