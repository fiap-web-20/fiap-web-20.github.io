


const resultado = document.querySelector("#resultado");

let myFunc1 = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

myFunc1.showArguments(
    "Vai Corinthians",
    "full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);


let myFunc2 = {
    showArguments: () => {
       // resultado.innerHTML = arguments;
      //  console.log(...arguments);

    },
};
myFunc2.showArguments(
    "Vai Corinthians",
    "full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);

let user = {
    name: "Amanda Letícia",
    usandoArrow: ()=>{
        console.log("Meu nome é", this.name, " Arrow Function");
    },

    usandoNominal(){
        console.log("Meu nome é", this.name, " Nominal Function");
    },
};

user.usandoArrow();
user.usandoNominal();









/**
 
{
    "name":"Glaucio Daniel",
    "email":"glauciodaniel@gmail.com",
    "password": "123456"
}

const {password, ...data} = await prisma.user.findById(1);

return data;

 */
