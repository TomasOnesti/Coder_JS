//Simulacion de una base de datos.
//Conectar la base de datos con el html
//Agregar nuevas funciones
//Actualizar filtrado de productos
const contenedor_card = document.getElementById("contenedor_card")
const productos = [
    {
        Id: 1,
        nombre: "Oblea_Cofler_Chocolate",
        descripcion:"La oblea fina y el relleno de chocolate se combinan para crear una experiencia placentera y adictiva en cada mordisco.",
        categoria:"Chocolate",
        precio:1800
    },

    {
        Id: 2,
        nombre: "Chocolate_milka",
        descripcion:"El chocolate Milka es mil veces más rico cuando lo compartimos. Gestos tiernos hay muchos, pero si los compartimos, habría muchísimos más.",
        categoria:"Chocolate",
        precio:2400
    },

    {
        Id: 3,
        nombre: "Alfajor_Havanna",
        descripcion:"Dos galletitas Rellenas con una deliciosa combinación de mucho dulce de leche, castañas de cajú y nueces, cubierta por una capa del más puro chocolate blanco",
        categoria:"Alfajor",
        precio:4500
    },

    {
        Id: 4,
        nombre: "Alfajor_Capitan_Del_Espacio",
        descripcion:"Para su devotos consumidores, es el mejor alfajor del mundo. Es que Capitán del Espacio es mucho más que dos tapitas bañadas en chocolate y rellenas de dulce de leche. Más que una golosina es un objeto de culto, un símbolo del conurbano, un emblema de la infancia de miles con un gran capital nostálgico.",
        categoria:"Alfajor",
        precio:3200
    },

    {
        Id: 5,
        nombre: "Caramelos_Billiken",
        descripcion:"Caramelos Billiken masticables y vienen en sabores frutales y de yogur. Ideales para compartir y disfrutar en cualquier momento del día.",
        categoria:"Golosina",
        precio:2000
    },

    {
        Id: 6,
        nombre: "Gomitas_Mogul",
        descripcion:"Disfruta de la variedad de sabores frutales en cada paquete de gomitas Mogul. Cada unidad trae una selección de dulces masticables con sabores inspirados en frutas, ideales para compartir o disfrutar en cualquier momento del día.",
        categoria:"Golosina",
        precio:1600
    }
]

function productos_pagina(){
    productos.forEach(producto=>{
        const card = document.createElement("article")
        card.classList.add("card")

        card.innerHTML=`
        <div class="contener">
            <div class="contenedor">
                <p class="producto" id="nombre">${producto.nombre}</p>
                <p class="producto" id="categoria">${producto.categoria}</p>
                <p class="producto" id="precio">${producto.precio}</p>    
            </div>
            <div class="cont_descripcion">
                <p class="producto" id="descripcion">${producto.descripcion}</p>
                <button class="boton">Comprar</button>
            </div>
        </div>
        `
        contenedor_card.appendChild(card)
    })
}

productos_pagina()




//Funcion para filtrar los productos almacenados por consola(esta conectado a un boton para ser ejecutado)
function filtrar(productos){

    const producto_filtrado = [];
    const alfajores = [];
    const chocolates = [];
    for( let i = 0; i < productos.length; i++){
        if(productos[i].categoria === "Golosina"){
            producto_filtrado.push(productos[i])
            console.log(producto_filtrado)
        }else{
            if(productos[i].categoria === "Alfajor"){
                alfajores.push(productos[i])
                console.log(alfajores)
            }else{
                chocolates.push(productos[i])
                console.log(chocolates)
            }
        }
    } 
}
 
//Funcion para agregar productos (esta conectado a un boton para ser ejecutado, solo puede agregar un producto)
function agregar_producto(){
    productos.push({
        id:prompt("id del producto"),
        nombre:prompt("nombre del producto"),
        descripcion:prompt("descripcion del producto"),
        categoria:prompt("categoria del producto"),
        precio:prompt("precio del producto")
    })
}

