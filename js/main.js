
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
            nombre: "Bebidas-blancas",
            id: "bebidas-blancas"
        }, precio: 2500,
    }

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");

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
        contenedorProductos.append(div)
    })

}


cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");
     if(e.currentTarget.id !="todos"){
        const productosBoton = productos.filter(producto=> producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
     } else {
        cargarProductos(productos);
     }
    })
})