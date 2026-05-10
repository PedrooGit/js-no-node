

// const pc = {

//     placaMae: "B341",
//     placaVideo: 'rtx1341',
//     cpu: "intel ckt",
//     fonte:  {
//         name: 'caixa de sapato',
//         volts: 12,
//         wats: 600
//     },
//     ram: [1,2,3,4],
// }
// console.log(pc);


// if (true){
//     var a = 1;  
//     let b = 2;
//     const c = 3;
// }
// console.log(a);



function main(){

    const pessoa = {

        name: ' ',
        idade: 18,
        vivo: true
    }

    // const name = pessoa.nome;
    // msm coisa

    // extrair coisas de objs
    const {name} = pessoa;
    console.log(name);
}
main();

function kct_queLegal(){

    const foda = {

        queLegal: true,
        legalMsm: "SIM",
        escola: {
            ano_1: 'passeii',
            ano_2: "passei tamb",
            ano_3: "ainda nao"
        }
    }

    const {escola} = foda;
    const {ano_1} = escola;

    console.log(ano_1);

}
kct_queLegal();
