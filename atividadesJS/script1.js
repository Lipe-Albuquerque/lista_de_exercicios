let name = "Filipe";
let age = 1;
let verdade = true;
let marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
let myObj = { name: "John", age: 30, car: null };
function myFunction() {
    switch (name) {
        case "Filipe":
            console.log("oi sou eu ");
            break;
        case "Ariana":
            console.log("bonita, prof ja falei pra ela rlx, tenho o alval dela kkk");
            break;
        default:
            console.log("Sla bro");
            break;
    }

}
function idade() {
    switch (age) {
        case 1:
            console.log("Pq eu fiz um switch para idade ?");
            break;
        case 2:
            console.log("V´cê é criativo");
            break;
        default:
            break;
    }
}


function teste(){
    if(verdade){
        console.log("ok isso foi facil");
    }else{
        console.log("Como tu chegou aqui ?");
    }
}

marcasIniciadasComF = [];
novoIndice = 0;

function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") == 0) {
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }else{
        console.log("vc nao deve chegar aqui");
    }
}

marcas.forEach(selecionarMarcas);

console.log("Aqui vou exibir e listar as requisições do professor!");

myFunction();
idade();
teste();
console.log(marcasIniciadasComF);