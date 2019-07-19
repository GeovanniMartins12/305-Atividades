let idade = Number(prompt("Digite sua idade"));

if(idade>=25 && idade<=60){
    let salario = Number(prompt("Informe seu sálario"));
        if(salario>=2000){
            let valorImprestimo = Number(prompt("Informe o valor desejado para o emprestimo"));
                if(valorImprestimo<=10*salario){
                    console.log("Emprestimo Concedido");
                }
                else{
                    console.log("Emprestimo Reprovado");
                }
        }   
        else{
            console.log("Seu sálario não permite o emprestimo");
        }   
}
else{
    console.log("Sua idade não permite o emprestimo")
}