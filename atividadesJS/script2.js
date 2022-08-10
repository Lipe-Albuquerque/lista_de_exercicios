let texto = document.getElementById("buscar");
texto.innerText = "batata"
console.log(texto);
let titulos = document.getElementsByTagName('h1')
console.log(titulos);
let botoes = document.getElementsByClassName('btn')
console.log(botoes);

let paragrafo = document.createElement("p");
const texto1 = document.createTextNode("Testando");
paragrafo.appendChild(texto1);
console.log(paragrafo);

const body = document.body;
body.appendChild(paragrafo);

let paragrafonew = document.createElement('p');
const texto2 = document.createTextNode("Testando2");
paragrafonew.appendChild(texto2);
let new1 = document.getElementById('new');
new1.append(paragrafonew)


console.log($("#buscar").val());
console.log($("#buscar").text());
$('#buscar').text("Isso foi mudado viu")
$('#buscar').append(
    $('<div>').append(
        $('<p>', {text:"batatinha frita123"})
    )
)
console.log($('btn').val());

var contaCliques = 0;
$("#btn").click(function() {
    if (contaCliques == 0) {
        $(".mudar").addClass("outraCor");
        contaCliques++;
    } else {
        $(".mudar").removeClass("outraCor");
        contaCliques--;
    }
});

let elementoComClass = [...$(".subtitulo")]

console.group('Elementos')
    console.log("Lista Elementos");    
    console.log(elementoComClass);
    for( count = 0; count< elementoComClass.length ; count++) {
        console.log("Item -",count,"-",elementoComClass[count].textContent);
    }
console.groupEnd()

$(".subtitulo").text("Subtitulo mudouuu")

let titles = [...$("h1")]

$("h1").text("mudei aqui mudou ai ?")

let theme = 1
function changeBackground() {
    
    if(theme === 1 ) {
        document.querySelector("body").classList.add("bg-dark")
        let paragraphs = document.querySelectorAll("p")
        paragraphs.forEach(item => {
            item.classList.add("text-light")
        });
        let titles = document.querySelectorAll("h1")
        titles.forEach(item => {
            item.classList.add("text-light")
        });
        let subtitles = document.querySelectorAll("h3")
        subtitles.forEach(item => {
            item.classList.add("text-light")
        });
        let lis = document.querySelectorAll("li")
        lis.forEach(item => {
            item.classList.add("text-light")
        });
        theme = 2
    } else {
        document.querySelector("body").classList.remove("bg-dark")
        let paragraphs = document.querySelectorAll("p")
        paragraphs.forEach(item => {
            item.classList.remove("text-light")
        });
        let titles = document.querySelectorAll("h1")
        titles.forEach(item => {
            item.classList.remove("text-light")
        });
        let subtitles = document.querySelectorAll("h3")
        subtitles.forEach(item => {
            item.classList.remove("text-light")
        });
        let lis = document.querySelectorAll("li")
        lis.forEach(item => {
            item.classList.remove("text-light")
        });
        theme = 1
    }
}

function calculate() {
    let numberOne = prompt("primeiro numero: ");
    let numberTwo = prompt("segundo numero: ");
    let operation = prompt("operação (+ - x *)");

    switch (operation) {
        case "+":
            sum(numberOne,numberTwo)
            break;
        case "-":
            subtract(numberOne,numberTwo)
            break;
        case "*":
            multiply(numberOne,numberTwo)
            break;
        case "/":
            divide(numberOne,numberTwo)
            break;
    
        default:
            alert("escolha uma operação (+ - x * ) ")
            break;
    }
    function sum(numberOne,numberTwo) {
        alert(Number(numberOne) + Number(numberTwo))
        console.log(Number(numberOne) + Number(numberTwo))
    }
    function subtract(numberOne,numberTwo) {
        alert(Number(numberOne) - Number(numberTwo))
        console.log(Number(numberOne) - Number(numberTwo))
    }
    function multiply(numberOne,numberTwo) {
        alert(Number(numberOne) * Number(numberTwo))
        console.log(Number(numberOne) * Number(numberTwo))
    }
    function divide(numberOne,numberTwo) {
        alert(Number(numberOne) / Number(numberTwo))
        console.log(Number(numberOne) / Number(numberTwo))
    }
}

$("#calculate").on("click", function(){
    calculate()
 })


 $("#verificar")

$("#verificar").click(()=>{
    console.log('FUNCIONOU!');
})


$("form").on("submit", (event) => {
    event.preventDefault()
    getData()
 })

function getData() {
    let name = $("#name").val()
    let age = $("#age").val()

    console.log("O nome registrado foi",name, "e a sua idade é", age, "anos.");
}