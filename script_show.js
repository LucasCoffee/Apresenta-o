// script para mostrar as falas de conhecer.html
var time1;
var time2;
var time3;
var time4;

var fala_1 = window.document.querySelector("#fala1")
var fala_2 = window.document.querySelector("#fala2")    
var fala_3 = window.document.querySelector("#fala3")
var fala_4 = window.document.querySelector("#fala4")
var fala_5 = window.document.querySelector("#fala5") 

function show_conhecer() {
   
    var menu = window.document.querySelector("#menu")
    
    menu.style.display = "none"

    var selection_aparecer = window.document.querySelector("#conhecer")
    selection_aparecer.style.display = "block"

    var input_name = window.document.querySelector("#name")
    var nick = input_name.value 

    var nome_user = window.document.querySelector("#nome")
    nome_user.innerHTML = `${nick}`

    fala_1.style.display = "block"      

 time1 = setTimeout(function run () {
     
    (fala_1.style.display = "none")
    (fala_2.style.display = "block")

    }, 2000);

 time2 = setTimeout (function () {    

    fala_2.style.display = "none"
    fala_3.style.display = "block"  

    }, 6500);

 time3 = setTimeout ( function () {
    fala_3.style.display = "none"
    fala_4.style.display = "block"

    }, 9500)

 time4 = setTimeout ( function () {
    fala_4.style.display = "none"
    fala_5.style.display = "block"

}, 12500)
}

function button_voltar(){

    var selection_aparecer = window.document.querySelector("#conhecer")
    selection_aparecer.style.display = "none"

    var menu = window.document.querySelector("#menu")
    menu.style.display = "block"

    clearTimeout(time1)
    fala_2.style.display = "none"
    clearTimeout(time2)
    fala_3.style.display = "none"
    clearTimeout(time3)
    fala_4.style.display = "none"
    clearTimeout(time4)
    fala_5.style.display = "none"

}

var cont = window.document.querySelector("#contados")
var menu = window.document.querySelector("#menu")


var time6
var time7
var time8
var time9

var pro = window.document.querySelector("#proficional")
var fala_6 = window.document.querySelector("#fala6")
var fala_7 = window.document.querySelector("#fala7")
var fala_8 = window.document.querySelector("#fala8")
var fala_9 = window.document.querySelector("#fala9")
var fala_10 = window.document.querySelector("#fala10")

function show_profissional(){

   menu.style.display = "none"
   pro.style.display = "block"

   fala_6.style.display = "block"

   time6 = setTimeout( function runner(){
      fala_6.style.display = "none"
      fala_7.style.display = "block"
   }, 2000)

   time7 = setTimeout( function(){
      fala_7.style.display = "none"
      fala_8.style.display = "block"
   }, 3500)

   time8 = setTimeout( function() {
      fala_8.style.display = "none"
      fala_9.style.display = "block"      
   }, 5500);

   time9 = setTimeout(function() {
      fala_9.style.display = "none"
      fala_10.style.display = "block"
   }, 8000);
}

function back_pro(){

   pro.style.display = "none"
   menu.style.display = "block"

   clearTimeout(time6)
    fala_6.style.display = "none"
    clearTimeout(time7)
    fala_7.style.display = "none"
    clearTimeout(time8)
    fala_8.style.display = "none"
    clearTimeout(time9)
    fala_9.style.display = "none"

}

var meios = window.document.querySelector("#meios")
var fala_11 = window.document.querySelector("#fala11")

var time10
function show_contados(){

   menu.style.display = "none"
   cont.style.display = "block"
   fala_11.style.display = "block"

   time10 = setTimeout(function(){
      fala_11.style.display = "none"
      meios.style.display = "block"
   },2000);






}

function back_menu(){

   menu.style.display = "block"
   cont.style.display = "none"

}


 /*

   clearTimeout(time6)
    fala_6.style.display = "none"
    clearTimeout(time7)
    fala_7.style.display = "none"
    clearTimeout(time8)
    fala_8.style.display = "none"
    clearTimeout(time9)
    fala_9.style.display = "none"
   */