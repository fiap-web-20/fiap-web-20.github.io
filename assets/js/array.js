
const carrosDOM = document.querySelector("#carros");

const veiculos = [
 "Chevrolet",
 "Ford",
 "Fiat",
 "Vw",
 "Honda",
 "Toyota",
 "Hyundai"
];

//ADICIONE AO FINAL DO ARRAY PUSH
veiculos.push("BMW", "Mercedes");

//ADICIONE NO INÍCIO DO ARRAY UNSHIFT
veiculos.unshift("Audi");

//REMOVENDO DO INÍCIO DO ARRAY SHIFT
const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemento do array", primeiro);

//REMOVENDO DO FINAL DO ARRAY POP
const ultimo = veiculos.pop();
console.log("Removendo o último elemento do array", ultimo);

//REMOVENDO UM ELEMENTO DO ARRAY
const posicao = 2;
const removido = veiculos.splice(posicao, 1);

//REMOVENDO MAIS DE UM ELEMENTO DO ARRAY
const removidos = veiculos.slice(1, 2);

//REMOVENDO E ADICIONANDO ELEMENTOS
const removidos2 = veiculos.splice(1, 2, "Ferrari", "lamborghini");



veiculos.forEach((value, key) => {
    carrosDOM.innerHTML += `<option value="${key}">${value}</option>`;
});

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];
//SLICE - RETORNA UM NOVO ARRAY E O PRIMEIRO PARAMETRO É OPCIONAL, E COMEÇA EM ZERO.
//O ULTIMO PARAMETRO DETERMINA ATÉ ONDE DEVE SER FILTRADO, POREM EXCLUINDO ESTE ULTIMO ELEMENTO.
const newNba = nbaTeams.slice(-1);
console.log(nbaTeams.slice(3, 5));
console.log(newNba, "Último");

//SPLICE - REMOVE E ADICIONA ELEMENTOS
//SLICE - RETORNA UM NOVO ARRAY

//////////////////////////////////////////////////////////////////

//map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring

const name = "Amanda Letícia Araujo Siqueira";
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.slice(-1)].join(" ");
console.log(nameComplete);


const procuraCeltic = (nomeTime)=>{
   return nomeTime == "Celtics" || nomeTime == "Raptors";
};

const CelticsMap = nbaTeams.map(procuraCeltic);
const CelticsFilter = nbaTeams.filter(procuraCeltic);
const CelticsFind = nbaTeams.find(procuraCeltic);


console.log(CelticsMap, "map");
console.log(CelticsFilter, "filter");
console.log(CelticsFind, "Find");

