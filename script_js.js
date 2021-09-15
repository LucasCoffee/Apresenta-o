var show_name = window.document.querySelector("#user_name")
var _button = window.document.querySelector(".hidden_button")

var fala_um = window.document.querySelector("#fala_1") 
var fala_dois = window.document.querySelector("#fala_2")

function show(){

    fala_um.style.display = "block"
    _button.style.display = "none"

    setTimeout (function () {
       fala_dois.style.display = "block"
       fala_um.style.display = "none"
    }, 1500)

}

var input_name = window.document.querySelector("#name")
input_name.addEventListener("click", next)

function next() {
    var button_next = window.document.querySelector("#next")
    button_next.style.display = "block"
    
}

var asking_name = window.document.querySelector("#asking_name")

function entrar(){
    if ( input_name.value.length > 0 ){
    var home = window.document.querySelector("#home")
    home.style.display = "none"

    var menu = window.document.querySelector("#menu")
    menu.style.display = "block"
    
    let nick = input_name.value 
    let title_name = window.document.querySelector("#title")
    title_name.innerHTML = `Seja bem vindo ${nick}`
    }
    else{
        asking_name.innerHTML = "Fala para mim como posso te chamar"
    }
    
}
