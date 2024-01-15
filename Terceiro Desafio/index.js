class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                console.log('Tipo de herói inválido');
                return;
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando um novo herói e atacando
let heroi = new Hero('Mago das Sombras', 25, 'mago');
heroi.atacar();

heroi = new Hero('Guerreiro dos Sonhos', 30, 'guerreiro');
heroi.atacar();

heroi = new Hero('Monge dos Ventos', 35, 'monge');
heroi.atacar();

heroi = new Hero('Ninja das Brumas', 40, 'ninja');
heroi.atacar();// iniciar
