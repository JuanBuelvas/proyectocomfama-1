let products=[
    {
        nombre:"Audifonos",
        precio:58000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tiendacomfama-b7f6a.appspot.com/o/foto.jpg?alt=media&token=645c0727-e12a-4036-afe5-a30836ca71c3',
            'https://firebasestorage.googleapis.com/v0/b/tiendacomfama-b7f6a.appspot.com/o/foto0.jpg?alt=media&token=0db7a453-5415-458f-b076-9d3c76136fe9']
    },
    {
        nombre:"Mouse",
        precio:10000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tiendacomfama-b7f6a.appspot.com/o/foto1.jpg?alt=media&token=5f321d35-aa07-4445-acf2-e82c2ac781fb',
            'https://firebasestorage.googleapis.com/v0/b/tiendacomfama-b7f6a.appspot.com/o/foto2.jpg?alt=media&token=1c9e913d-55a9-445c-a47f-02a82bdaba45']
    },
    {
        nombre:"Teclado",
        precio:10000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tiendacomfama-b7f6a.appspot.com/o/foto3.jpg?alt=media&token=cab7019d-5625-4002-a28b-52112506063a',
            'https://firebasestorage.googleapis.com/v0/b/tiendacomfama-b7f6a.appspot.com/o/foto4.jpg?alt=media&token=adc54abc-1442-4c8d-a34c-e63676b620af']
    },
    {
        nombre:"Silla",
        precio:10000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tiendacomfama-b7f6a.appspot.com/o/foto5.jpg?alt=media&token=22ce2dcc-dedd-4393-9482-8d6b5421ad47',
            'https://firebasestorage.googleapis.com/v0/b/tiendacomfama-b7f6a.appspot.com/o/foto6.jpg?alt=media&token=5c9213c1-9ca8-45e7-b55f-b6500b46269d']
    }
]

let fila = document.getElementById('fila');

//Recorrer el arreglo
products.forEach(function(product) {
    let column = document.createElement("div");
    column.classList.add("col");

    let card = document.createElement("div");
    card.classList.add("card","h-100","text-center");

    let image = document.createElement("img");
    image.classList.add("img-fluid","w-100","h-100");
    image.src=product.fotos[0]

    //Nombre
    let name = document.createElement("h3");
    name.textContent=product.nombre;

    //Precio
    let precio = document.createElement("h2");
    precio.classList.add("fw-bold");
    precio.textContent='$'+product.precio;

    //Detectando Eventos
    image.addEventListener("mouseover",function() {
        image.src=product.fotos[1];
    })
    image.addEventListener("mouseleave",function() {
        image.src=product.fotos[0];
    })









    //Padres e Hijos
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(precio);
    column.appendChild(card);
    fila.appendChild(column);






});



