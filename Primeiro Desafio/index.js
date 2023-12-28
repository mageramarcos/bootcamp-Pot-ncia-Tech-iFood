
// Para executar o codigo descomente um heroi de cada vez:



// Nomes dos herois e xp's
let nomesDosHeroisXP =
    ['Homem Aranha', '988']
// ['Homem de Ferro', '1500']
// ['Batman', '2500']
// ['Mulher Maravilha', '6000']
// ['Thor', '7500']
// ['Hulk', '9000']
// ['Doutor Estranho', '9700']
// ['Pantera Negra', '2500000']



if (nomesDosHeroisXP[1] <= 1000) {
    console.log(`O Herói de nome ${nomesDosHeroisXP[0]} está no nível de Ferro`)
} else if (nomesDosHeroisXP[1] <= 2000) {
    console.log(`O Herói de nome ${nomesDosHeroisXP[0]} está no nível de Bronze`)
} else if (nomesDosHeroisXP[1] <= 5000) {
    console.log(`O Herói de nome ${nomesDosHeroisXP[0]} está no nível de Prata`)
} else if (nomesDosHeroisXP[1] <= 7000) {
    console.log(`O Herói de nome ${nomesDosHeroisXP[0]} está no nível de Ouro`)
} else if (nomesDosHeroisXP[1] <= 8000) {
    console.log(`O Herói de nome ${nomesDosHeroisXP[0]} está no nível de Platina`)
} else if (nomesDosHeroisXP[1] <= 9000) {
    console.log(`O Herói de nome ${nomesDosHeroisXP[0]} está no nível de Ascendente`)
} else if (nomesDosHeroisXP[1] <= 10000) {
    console.log(`O Herói de nome ${nomesDosHeroisXP[0]} está no nível de Imortal`)
} else {
    console.log(`O Herói de nome ${nomesDosHeroisXP[0]} está no nível de Radiante`)
}

