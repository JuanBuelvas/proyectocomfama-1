//RECETA PARA CONSUMIR APIS CON JS

//1.URI DEL SERVICIO
const URI='https://api.spotify.com/v1/artists/3YQKmKGau1PzlVlkL1iodx/top-tracks?market=US'

const URI0='https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1/top-tracks?market=US'

//2.CONFIGURAR LA PETICION
const PETICION={
    method:'GET',
    headers:{
        Authorization:'Bearer BQA0RPUjEKFcdTMVhVPLMtHSt53J1_fNE6TzVMGwPVT2kyVejB5jBX23WK15uawySQFpe99GiFbUQ-i4q3YdWWL53y2AzweMceVpJj6TrFxKhlzpi5DTZsf5r0cDNdbr44W7Gpnu1RcNsX2nrNQXIG011l4XnQMyFMbXkP74K43xssac4-rEvOXpyUCMVt2aQB0'
    }
}

//3.CONSUMIR API
//promesa (funcion asincrona)
fetch(URI0, PETICION)
.then(function (response) {
    return response.json() //Aseguro el formato de respuesta
})
.then(function(response){
    //Usar la respuesta
    console.log(response)
    console.log(response.tracks)
    // response.tracks.forEach(function(cancion){
    //     console.log(cancion.preview_url)
    // })
    mostarCanciones(response.tracks);
})
.catch(function(response){
    console.log(response)
})

//Funcion para pintar datos
function mostarCanciones(canciones){
    //Pasos para pintar(renderizar) en la GUI(Interfaz Grafica de Usuario)

    //1.Crear referencia a la base sobre la cual pintar
    let fila = document.getElementById('fila');

    //2. Recorrer los datos que llegan
    canciones.forEach(function(cancion) {
        //console.log("hola")
        //Aplicando Traversing()
        //2.1 Crear columnas
        let columna=document.createElement("div");
        //Agregar Clases al elemento
        columna.classList.add("col");

        //2.2 Crear Tarjeta(card)
        let card=document.createElement("div");
        card.classList.add("card", "h-100","p-3","shadow");

        //2.3 Crear el Audio
        let audio=document.createElement("audio");
        audio.classList.add("w-100","mt-3");
        audio.src=cancion.preview_url
        //Agregar Atributos al elemento
        audio.setAttribute("controls","controls");

        //2.4 Crear el Nombre de la cancion
        let nombreCancion=document.createElement("h3")
        nombreCancion.classList.add("text-center")
        nombreCancion.textContent=cancion.name

        //2.5 Creando la foto del album
        let fotoAlbum=document.createElement("img")
        fotoAlbum.classList.add("img-fluid","w-100")
        fotoAlbum.src=cancion.album.images[0].url

        //2.6 Crear Popularidad
        let popularidad=document.createElement("h4")
        popularidad.classList.add("text-center","fw-bold")
        popularidad.textContent="Popularidad: " + cancion.popularity

        //2.7 Crear Pista
        let pista=document.createElement("h4")
        pista.classList.add("text-center","fw-bold")
        pista.textContent="Pista: " + cancion.track_number

        //Final definir jerarquias (Padres e Hijos)
        card.appendChild(fotoAlbum)
        card.appendChild(popularidad)
        card.appendChild(audio)
        card.appendChild(nombreCancion)
        card.appendChild(pista)
        columna.appendChild(card)
        fila.appendChild(columna)



    });



}









