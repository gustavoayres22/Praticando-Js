// querySelectorAll pega todos os elementos 
const elementos = document.querySelectorAll(".texto");

console.log(elementos);

// percorrendo lista e pegamdo cada elemento p 1 por vez
elementos.forEach(elemento => console.log(elemento))

// percorrendo a lista e pegando o texto
elementos.forEach(elemento => console.log(elemento.innerText));

// alterando textos
elementos.forEach(elemento=> {
    elemento.innerText = "Alterado";
    // elemento.Textcontent = "Alterado";
})

elementos.forEach(elemento=> {
    elemento.innerHTML = "<h2>Item</h2>";
})

// trocar cor do elemento
elementos.forEach(elemento => {
    elemento.style.color = "#0000FF"
})

// Eventos com Js;
// eventos são as ações do usuário

// EVENTO DE CLICK
// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
//     alert("Você clicou!");
// })

// EVENTO DE DIGITAÇÃO (input / keyup)

// evento inoput -> dispara sempre que figita, em tempo real
const campo = document.getElementById("campo")
const resultado = document.getElementById("resultado")

campo.addEventListener("input", () => {
    // value -> o que está sendo digitado dentro do campo 
    resultado.innerText = campo.value;
})

// KEYUP
// só dispara quando solta a tecla
resultado.innerText = campo.value;
