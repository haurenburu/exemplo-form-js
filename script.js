let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let pass1 = document.getElementById("password").value;
let pass2 = document.getElementById("passwordrep").value;
let erro = [];

function updateVars() {



}

function verificar() {
    let ready = true;
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    pass1 = document.getElementById("password").value;
    pass2 = document.getElementById("passwordrep").value;


    if (!username || !email || !pass1 || !pass2){
        ready = false;
        erro.push("Os campos são obrigatórios");
    }

    if (username.length < 4) {
        ready = false;
        erro.push("Usuario deve ter pelo menos de 4 letras");
    }
    if (!email.includes("@")) {
        ready = false
        erro.push("Esse não é um email valido");
    }
    if (pass1.length < 8) {
        ready = false
        erro.push("A senha tem que ter pelo menos 8 caracteres");
    }
    if (pass1 !== pass2) {
        erro.push("As senhas não correspondem");
        ready = false
    };

    sendForm(ready)
}

function sendForm(ready) {
    if (!ready) {
        document.getElementById("formulario").addEventListener("click", function (event) {
            event.preventDefault()
        });

        alert("algo ta errado folks")
        console.log(erro);
        erro = [];
    } else {
        
    }

}