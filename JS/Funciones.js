//Simulacion de una base de datos.

const contenedor_card = document.getElementById("contenedor_card")
const productos = [
    {
        Id: 1,
        nombre: "Oblea Cofler Chocolate",
        descripcion:"La oblea fina y el relleno de chocolate se combinan para crear una experiencia placentera y adictiva en cada mordisco.",
        categoria:"Chocolate",
        precio:1800
    },

    {
        Id: 2,
        nombre: "Chocolate milka",
        descripcion:"El chocolate Milka es mil veces más rico cuando lo compartimos. Gestos tiernos hay muchos, pero si los compartimos, habría muchísimos más.",
        categoria:"Chocolate",
        precio:2400
    },

    {
        Id: 3,
        nombre: "Alfajor Havanna",
        descripcion:"Dos galletitas Rellenas con una deliciosa combinación de mucho dulce de leche, castañas de cajú y nueces, cubierta por una capa del más puro chocolate blanco",
        categoria:"Alfajor",
        precio:4500
    },

    {
        Id: 4,
        nombre: "Alfajor Capitan Del Espacio",
        descripcion:"Para su devotos consumidores, es el mejor alfajor del mundo. Es que Capitán del Espacio es mucho más que dos tapitas bañadas en chocolate y rellenas de dulce de leche. Más que una golosina es un objeto de culto, un símbolo del conurbano, un emblema de la infancia de miles con un gran capital nostálgico.",
        categoria:"Alfajor",
        precio:3200
    },

    {
        Id: 5,
        nombre: "Caramelos Billiken",
        descripcion:"Caramelos Billiken masticables y vienen en sabores frutales y de yogur. Ideales para compartir y disfrutar en cualquier momento del día.",
        categoria:"Golosina",
        precio:2000
    },

    {
        Id: 6,
        nombre: "Gomitas Mogul",
        descripcion:"Disfruta de la variedad de sabores frutales en cada paquete de gomitas Mogul. Cada unidad trae una selección de dulces masticables con sabores inspirados en frutas, ideales para compartir o disfrutar en cualquier momento del día.",
        categoria:"Golosina",
        precio:1600
    }
]
//Mostrar los productos en la pagina por medio de DOM
function productos_pagina(){
    productos.forEach(producto=>{
        const card = document.createElement("article")
        card.classList.add("card")
        
        card.innerHTML=`
        <div class="contener">
            <div class="contenedor">
                <p class="producto" id="nombre">${producto.nombre}</p>
                <p class="producto" id="categoria">${producto.categoria}</p>
                <p class="producto" id="precio">${producto.precio}$</p>    
            </div>
            <div class="cont_descripcion">
                <p class="producto" id="descripcion">${producto.descripcion}</p>
                <button onclick ="agregarCarrito(${producto.Id})" class="boton">Comprar</button>
            </div>
        </div>
        `
        contenedor_card.appendChild(card)
    })
}
productos_pagina()

//Carrito
const Carrito=[]
const lista = document.getElementById("lista")
//Funcion para agregar productos al carrito
function agregarCarrito(Id){
    const Producto = productos.find(producto=> producto.Id === Id) 
    Carrito.push(Producto)
    verCarrito()
}
//Funcion para mostrar los productos del carrito
function verCarrito(){
    lista.innerHTML="";

    Carrito.forEach((producto, index)=>{
        const total = Carrito.reduce((acumulador,productos)=> acumulador + productos.precio, 0)
        const item = document.createElement("li");

        item.innerHTML=`
            <div class="contenerC">
                <div class="contenedorC">
                    <p class="productoC" id="nombre">${producto.nombre}</p>
                    <p class="productoC" id="precio">${producto.precio}$</p>    
                </div>
                <div class="contenedorCa">
                <p class="productoC" id="categoria">${producto.categoria}</p>
                </div>
                <div class="cont_descripcionC">
                    <p class="productoC" id="descripcion">${producto.descripcion}</p>
                    <p class="productoC total">Total ${total}$</p>
                </div>
            </div>
        `
        
        lista.appendChild(item)
    })
    
}
