
const productos = [
    {
        id: "whiskey-jack-daniels",
        titulo: "Whiskey Jack Daniels",
        imagen: "./img/whiskeys/01.jpg",
        categoria: {
            nombre: "Whiskeys",
            id: "whiskeys"
        }
        , precio: 3500,
    },

    {
        id: "jagermeister"
        , titulo: "Jagermeister",
        imagen: "./img/whiskeys/02.jpg",
        categoria: {
            nombre: "Whiskeys",
            id: "whiskeys"
        }
        , precio: 2500,
    },



    {
        id: "fernet-branca",
        titulo: "Fernet branca",
        imagen: "./img/aperitivos/01.jpg",
        categoria: {
            nombre: "Aperitivos",
            id: "aperitivos"
        }, precio: 1500
    },



    {
        id: "gancia",
        titulo: "Gancia",
        imagen: "./img/aperitivos/02.jpg",
        categoria: {
            nombre: "Aperitivos",
            id:  "aperitivos"
        },
        precio: 900,
    },


    {
        id: "aperol",
        titulo: "Aperol",
        imagen: "./img/aperitivos/03.jpg",
        categoria: {
            nombre: "Aperitivos",
            id: "aperitivos"
        }, precio: 1500,
    },

    {
        id: "campari",
        titulo: "Campari",
        imagen: "./img/aperitivos/04.jpg",
        categoria: {
            nombre: "Aperitivos",
            id: "aperitivos"
        },
        precio: 1200,
    },

    {
        id: "voodka-absolut",
        titulo: "Voodka Absolut",
        imagen: "./img/bebidas-blancas/01.jpg",
        categoria: {
            nombre: "Bebidas Blancas",
            id: "bebidas-blancas"
        }, precio: 2500,
    }

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let   botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML= "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = ` 
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
    `;
       contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}


cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");
     if(e.currentTarget.id !="todos"){ 
        const productosCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

        tituloPrincipal.innerText = productosCategoria.categoria.nombre;

        const productosBoton = productos.filter(producto=> producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
     } else {
        tituloPrincipal.innerText = "Todos los productos";
        cargarProductos(productos);
     }
    })
})

function actualizarBotonesAgregar(){
     botonesAgregar = document.querySelectorAll(".producto-agregar");

     botonesAgregar.forEach(boton=> {
        boton.addEventListener("click" , agregarAlcarrito);
     });
}
let productosEnCarrito;

let   productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){

     productosEnCarrito =JSON.parse(productosEnCarritoLS) ;
     actualizarNumerito();
}else{
    productosEnCarrito = [];
}



function agregarAlcarrito(e){

const idBoton= e.currentTarget.id;

const productoAgregado = productos.find(producto=> producto.id ===idBoton);

if(productosEnCarrito.some(producto=> producto.id ===idBoton)) {
const index = productosEnCarrito.findIndex(producto=>producto.id === idBoton);
productosEnCarrito [index].cantidad++;
}else{
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
}
actualizarNumerito();

localStorage.setItem("productos-en-carritos" , JSON.stringify(productosEnCarrito));

}

function actualizarNumerito (){
    let nuevoNumerito = productosEnCarrito.reduce((acc,producto)=> acc+ producto.cantidad ,0);
numerito.innerText = nuevoNumerito; 
}