var dolarHTML = document.querySelector("#dolar")
var euroHTML = document.querySelector("#euro")
setTimeout(function(){
    dolarHTML.textContent = "Valor do dolar comercial: R$"+ dolarComercial
    euroHTML.textContent = "Valor do euro comercial: R$"+ euroComercial
}, 100)


