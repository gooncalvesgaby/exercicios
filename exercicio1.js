/* 
 * crie um programa que tenha duas variaveis do tipo objeto, com atributos notaUm, notaDois e nome.
crie duas variaveis que receba a media do alunoUm e a media do alunoDois. 
cries um If/Else para cada aluno verificando se a media é >= 6, se sim, mostre aprovado, se nao, mostre reprovado */


const alunoUm = { 
    notaUm: 0,
    notaDois: 5,
    nome:"Frederika"
}

const aluno = {
    notaUm: 5,
    notaDois: 9,
    nome: "Godofredo"
}
 let mediaAlunoUm = (alunoUm.notaUm + alunoUm.notaDois) / 2
 let mediaAlunoDois = (aluno.notaUm + aluno.notaDois) / 2

 if(mediaAlunoUm >= 6){
    console.log(alunoUm.nome, "aprovado")

 } else {
    console.log(alunoUm.nome, "reprovado")
 }

 if(mediaAlunoDois >= 6){
    console.log(aluno.nome, "aprovado")

 } else {
    console.log(aluno.nome, "reprovado")
 }