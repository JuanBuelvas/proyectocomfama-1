import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

let botonLogin = document.getElementById('buttonLogin');
botonLogin.addEventListener("click",function(event){
    //Evito que el formulario se reinicie
    event.preventDefault()

    //Capturar lo que escriben en cada caja del formulario
    let email = document.getElementById('emailLogin').value;
    let password = document.getElementById('passwordLogin').value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('Bienvenido ' + user.email)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})

