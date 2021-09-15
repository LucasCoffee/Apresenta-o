var aviso = window.document.querySelector("#aviso"),
    fundo = window.document.querySelector(".jogo")

var question_1 = window.document.querySelector("#question_html_1"),
    question_2 = window.document.querySelector("#question_html_2"),
    question_3 = window.document.querySelector("#question_html_3"),
    question_4 = window.document.querySelector("#question_html_4"),
    question_5 = window.document.querySelector("#question_html_5"),
    start_button = window.document.querySelector("#start");

var acertos = 0
var erros = 0
var teste

function start(){ 
    
    if(teste == "true"){
        window.alert("Quiz já foi iniciado")
    }else{
        fundo.style.display = "block"
        question_1.style.display = "block"
        aviso.style.display = "none"
        
    teste = "true"
        console.log(teste)
        
    }
}
    
var radio1 = window.document.querySelector("#resposta01")
var radios_1 = window.document.querySelector("#options1")
radios_1.addEventListener('click', verificar_1)

function verificar_1 (){
   
    if (radio1.checked){
        
        acertos++ 
            
        question_1.style.display = "none"
        question_2.style.display = "block"

    } else {

        erros++    

        question_1.style.display = "none"
        question_2.style.display = "block"

    } 
}


    
var radio2 = window.document.querySelector("#resposta02")
var radios_2 = window.document.querySelector("#options2")
radios_2.addEventListener('change', verificar_2)
        
function verificar_2(){
            
    if(radio2.checked){       
        
        acertos++
            
        question_2.style.display = "none"
        question_3.style.display = "block"
                
    } else {
        
        erros++

        question_2.style.display = "none"
        question_3.style.display = "block"
    
    } 
}

var radio3 = window.document.querySelector("#resposta03")
var radios_3 = window.document.querySelector("#options3")
radios_3.addEventListener('change', verificar_3)
        
function verificar_3(){

    if(radio3.checked) {

        acertos++
            
        question_3.style.display = "none"
        question_4.style.display = "block"
                      
    } else {

        erros++
            
        question_3.style.display = "none"
        question_4.style.display = "block"
      
    }
}

var radio4 = window.document.querySelector("#resposta04"), 
    radio_4 = window.document.querySelector("#options4");
radio_4.addEventListener('change', verificar_4)

function verificar_4(){

    if(radio4.checked) {
        acertos++
            
        question_4.style.display = "none"
        question_5.style.display = "block"
                
    } else {

        erros++
                       
        question_4.style.display = "none"
        question_5.style.display = "block"

    }
}

var radio5 = window.document.querySelector("#resposta05"), 
    radio_5 = window.document.querySelector("#options5");
radio_5.addEventListener('change', verificar_5)

function verificar_5(){

    if(radio5.checked) {

        acertos++
            
        question_5.style.display = "none"
        resultado()
                
    } else {

        erros++
                       
        question_5.style.display = "none"
        resultado()

    }
}
function resultado(){
    var res = window.document.querySelector("#res")
    var msg = window.document.querySelector("#msg")
    var acerto = window.document.querySelector("#certos")
    var erro = window.document.querySelector("#erro")

    
    res.style.display = "block"
    msg.style.display = "block"
    acerto.style.display = "block"
    erro.style.display = "block"

    
    if(acertos >= erros){

        msg.innerHTML = "Parabéns piloto, você foi muito bem"
        acerto.innerHTML = `Respostas certas: ${acertos}`
        erro.innerHTML = `Respostas erradas: ${erros}`

    }else{

        msg.innerHTML = "Você está quase lá"
        acerto.innerHTML = (`Respostas certas: ${acertos}`)
        erro.innerHTML = `Respostas erradas: ${erros}`

    }
    

}

function back(){

    

    verificar_1.break
    verificar_2.break
    verificar_3.break




}