//RECETA PARA CONSUMIR APIS CON JS

//1.URI DEL SERVICIO
const URI='https://api.spotify.com/v1/artists/3YQKmKGau1PzlVlkL1iodx/top-tracks?market=US'

//2.CONFIGURAR LA PETICION
const PETICION={
    method:'GET',
    headers:{
        Authorization:'Bearer BQDoliL3Jm_-upBcZm4FjQIEVBnfVAjkGlZlwX82W4O3ZG8wBK2pBTvOGfg0-xa8wjkl6M7Fveh09rvzImofOIuhWoFNGnqXy3FH3f0pikYz0ML5cVlMOW_y91Ax-HJy3C8GZhsOv66OyCV2kTIOSsfkhWJO9HuxX_1anNfWGVj_kd-FJ_3reQvnNcnUrd-vPcE'
    }
}

//3.CONSUMIR API
//promesa (funcion asincrona)
fetch(URI, PETICION)
.then(function (response) {
    return response.json() //Aseguro el formato de respuesta
})
.then(function(response){
    //Usar la respuesta
    console.log(response)
    console.log(response.tracks)
    response.tracks.forEach(function(cancion){
        console.log(cancion.preview_url)
    })
})
.catch(function(response){
    console.log(response)
})


