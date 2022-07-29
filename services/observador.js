import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    let usuario=document.getElementById("user");
    usuario.textContent="Bienvenido " + user.email;

    let buttonExit = document.getElementById('salir');
    buttonExit.classList.remove('invisible')

    let tienda = document.getElementById('tienda');
    tienda.classList.remove('invisible')
    // ...
  } else {
    let usuario=document.getElementById("user");
    usuario.textContent="";
  }
});

let buttonExit = document.getElementById('salir');
buttonExit.addEventListener('click', function () {
  const auth = getAuth();
  signOut(auth).then(() => {
      // Sign-out successful.
      window.location.href='index.html'
  }).catch((error) => {
      // An error happened.
  });
})
















