let semana = Number(prompt("Digite um número de 1 a 7"));
let dia1 = "DOMINGO";
let dia2 = "SEGUNDA-FEIRA";
let dia3 = "TERÇA-FEIRA";
let dia4 = "QUARTA-FEIRA";
let dia5 = "QUINTA-FEIRA";
let dia6 = "SEXTA-FEIRA";
let dia7 = "SÁBADO";

if(semana==1){
    console.log(`É ${dia1}`);
}

else if(semana==2){
    console.log(`É ${dia2}`);
}

else if(semana==3){
    console.log(`É ${dia3}`);
}

else if(semana==4){
    console.log(`É ${dia4}`);
}

else if(semana==5){
    console.log(`É ${dia5}`);
}

else if(semana==6){
    console.log(`É ${dia6}`);
}

else if(semana==7){
    console.log(`É ${dia7}`);
}

else{
    console.log("Número informado é incorreto")
}