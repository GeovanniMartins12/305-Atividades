let idade = Number(prompt("Digite sua idade"));
  
if(idade>=18 && idade<=59){
    let aposentado = window.confirm("Você é aposentado ?");
    if(idade>=18 && idade<=59 && aposentado){
        console.log("A entrada é gratis");
        } else {
            let estudante = window.confirm("Você é estudante?");
            if(idade>=18 && idade<=59 && estudante){
            console.log("Valor 17,50");
            } else {
                console.log("Valor 35,50");
            }
        }
}

else if(idade>0 && idade<=12){
    console.log("O valor é de 10 reais a entrada");
}
    else if(idade>=13 && idade<=17){
        console.log("O valor é de 15 reais a entrada");
    }

else{
    console.log("A entrada é gratis");
}
