//Consumir Servicio POST
const URI='https://accounts.spotify.com/api/token'

const DATO1="client_id=2dfc179e4a3b451eb524279c4ea03fef";
const DATO2="client_secret=8b6bdbc57cdb4d958270df90b0b412b8";
const DATO3="grant_type=client_credentials";

const REQUEST={
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    },
    body:DATO1+'&'+DATO2+'&'+DATO3
}

fetch(URI,REQUEST)
.then(function(response){
    return response.json();
})
.then(function(response){
    console.log(response);
    //Armando el TOKEN
    const TOKEN=response.token_type+" "+response.access_token
    console.log(TOKEN);
})
.catch(function(error){
    console.log(error)
})

