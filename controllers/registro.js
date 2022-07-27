import { getAuth, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

let button = document.getElementById('button');
let buttonExit = document.getElementById('buttonExit');

//Escucho el Click en el boton de registro
button.addEventListener('click', function (event) {
    //Evito que el formulario se reinicie
    event.preventDefault()

    //Capturar lo que escriben en cada caja del formulario
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log(email, password)
    //Me autentico ande firebase
    const auth = getAuth();
    //Se llama a la promesa createUser
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //Si todo es correcto
            // Signed in
            const user = userCredential.user;
            console.log(userCredential);

            alert("Registro Exitoso, Bienvenido");
            window.location.href = './registro.html';
        })
        .catch((error) => {
            //si algo falla
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Upss algo fallo " + errorMessage);
            // ..
        });

})

buttonExit.addEventListener('click', function () {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
})