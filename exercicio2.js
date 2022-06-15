let alunos = [
    {nome: "Ana Paula", idade: 15, sexo: "feminino"},
    {nome: "Carlos", idade: 17, sexo: "masculino"},
    {nome: "Cristiano", idade: 14, sexo: "masculino"},
    {nome: "Aline", idade: 13, sexo: "feminino"},
    {nome: "Pedro", idade: 15, sexo: "masculina"},
    {nome: "Sofia", idade: 12, sexo: "feminino"},
    {nome: "Paloma", idade: 16, sexo: "feminino"}

]
console.log(alunos.filter(function(p){
    if(p.idade >= 15 && p.idade <= 17 ){
        return p
    }
}))