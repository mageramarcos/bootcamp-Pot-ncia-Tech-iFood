
// Para executar Defina:

// Primeiro (1) parametro com o nome do Heroi
// Segundo (2) parametro com as vitorias
// Terceiro (3) parametro com a quantidade de derrotas
// console.log(calcularRankeadas('1', 2, 3))

console.log(calcularRankeadas('super homem', 10002, 2))



function calcularRankeadas(nome, vitorias, derrotas) {
    if ((vitorias - derrotas) <= 1000) {
        return `O Herói de nome ${nome} está no nível de Ferro`
    } else if ((vitorias - derrotas) <= 2000) {
        return `O Herói de nome ${nome} está no nível de Bronze`
    } else if ((vitorias - derrotas) <= 5000) {
        return `O Herói de nome ${nome} está no nível de Prata`
    } else if ((vitorias - derrotas) <= 7000) {
        return `O Herói de nome ${nome} está no nível de Ouro`
    } else if ((vitorias - derrotas) <= 8000) {
        return `O Herói de nome ${nome} está no nível de Platina`
    } else if ((vitorias - derrotas) <= 9000) {
        return `O Herói de nome ${nome} está no nível de Ascendente`
    } else if ((vitorias - derrotas) <= 10000) {
        return `O Herói de nome ${nome} está no nível de Imortal`
    } else {
        return `O Herói de nome ${nome} está no nível de Radiante`
    }
}