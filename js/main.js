let edad = prompt("Cuantos años tenes"); {

    if (edad <= 17) {
        alert("Eres menor de edad lo siento , volve cuando tengas 18")
    } else {
        alert(
            "Bienvenido ya puedes acceder a nuestros productos"
        )
    }
}

const productos = [
    { id: 1, nombre: "Fernet Branca", precio: 1500, },
    { id: 2, nombre: "Gancia", precio: 900, },
    { id: 3, nombre: "Voodka Absolut", precio: 2500, },
    { id: 4, nombre: "Aperol", precio: 1500, },
    { id: 5, nombre: "Whiskey Jack Daniels", precio: 3500, },
    { id: 6, nombre: "Jagermeister", precio: 2500, },
    { id: 7, nombre: "Campari", precio: 1200, },
];

function producto(nombre, precio, img) {
    this.id = productos.length + 1;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
}

console.log(productos);

function findProducto(arr, filtro) {
    const encontrado = arr.find((producto) => {
        return producto.nombre.includes(filtro.toLowerCase());
    });
    return encontrado;
}
let buscar = prompt("Ingresa el nombre del producto")
const produEncontrado = findService(productos, buscar)
console.log(produEncontrado);

function filtrar(arr, filtro, param) {
    return arr.filter((el) => {
        if (param == "precio") {
            return el[param] <= filtro;
        } else if (param === "id") {
            return el[param] == filtro
        } else {
            return el[param].includes(filtro)

        }
    });
}
const porPrecio = filtrar(productos, 1500, "precio")

console.log(porId);
const porNombre= filtrar(productos, "Cam", "nombre")
console.log(porNombre);