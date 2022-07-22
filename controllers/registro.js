let button=document.getElementById('button');

button.addEventListener('click',function(event){
    event.preventDefault()
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    console.log(email, password)
})

