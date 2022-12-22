let edad = prompt("Cuantos años tenes"); {

    if (edad <= 17) {
        alert("Eres menor de edad lo siento , volve cuando tengas 18")
    } else {
        alert(
            "Bienvenido ya puedes acceder a nuestros productos"
        )
    }
}

let productos = prompt("Seleccione el producto deseado: \n1-Fernet Branca. \n2-Gancia. \n3-Voodka Absolut. \n4-Aperol. \n5-whiskey jack daniels. \n6-jagermeister. \nPresioná X para finalizar.");
let precioFernet = 1200;
let precioGancia = 800;
let precioVoodka = 1500;
let precioAperol = 900;
let precioWhiskey = 2000;
let precioJagermeister = 2000;

while (productos != "X" && productos != "x")
    switch (productos) {
        case "1":
            alert("El Fernet Branca esta $" + precioFernet);
            break;
        case "2":
            alert("El Gancia esta $" + precioGancia);
            break;
        case "3":
            alert("El voodka Absolut esta $" + precioVoodka);
            break;
        case "4":
            alert("El Aperol esta $" + precioAperol);
            break;
        case "5":
            alert("El Whiskey Jack Daniels esta $" + precioWhiskey);
            break;
        case "6":
            alert("El jagermeister esta $" + precioJagermeister);
            break;

        default:
            alert("opcion no valida");
            break;



    }


let cantidad = parseInt(prompt("Ingrese cantidad"));
function calcularprecio(productos, cantidad) {
    for (let i = 0; i < 5; i++) {
        let precio = productos[i] * cantidad;
        return precio;
    }
}


