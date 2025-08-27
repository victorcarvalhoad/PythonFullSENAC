const prompt = require("prompt-sync")();

// Funções:
function mostrarMenu() {
    console.log(`
        --- Escolha uma opção abaixo ---
        [1] Naruto
        [2] One Piece
        [3] Pokémon
        [4] Sair
----------------------------------------------------------------------------------------------------------------------------------
`);
}

function naruto() {
    console.log(`
Eu nunca volta atrás com a minha palavra. Esse é meu jeito ninja! -Uzumaki Naruto

Se as pessoas soubessem o peso das palavras, dariam mais valor ao silêncio. -Uchiha Itachi

Sorrir é a melhor maneira de lidar com situações difíceis. -Jiraya
`);
}

function onePiece() {
    console.log(`
Quem disse que não pode ser feito nunca deve interromper aquele que está fazendo. -Monkey D. Luffy

Não importa o que o mundo diz de mim, o que importa é que eu nunca fiz nada que contrariasse os meus princípios e nunca farei -Rorona Zoro

Lave os pratos sorrindo... Pois se estão sujos é porque tinha comida na mesa. - Sanji`);
}

function pokemon() {
    console.log(`
Esse meu jeito de viver
Ninguém nunca foi igual
A minha vida é fazer
O bem vencer o mal

Pelo mundo viajarei
Tentando encontrar
Um Pokémon e com o seu poder
Tudo transformar

Pokémon!
Tenho que pegá-los (isso eu sei)
Pegá-los eu tentarei
Pokémon... -Abertura
        
Não vale a pena sair do seu próprio caminho, só para fazer com que alguém goste de você. -Ash Ketchum
        
`);
}

// Título
console.log("**************************************************");
console.log(`*              PROTÓTIPO CHATBOT :D              *`);
console.log("**************************************************");

// Apresentações
console.log("Prazer me chamo Alexo!");
const nome = prompt("Qual o seu nome? ");
console.log(`Olá, ${nome}! Escolha uma opção de anime e lhe direi algumas frases dele:`);
mostrarMenu();


let continuar = true;
// Loop
while (continuar === true) {
    let opcao = (prompt("Digite o número da opção que deseja: "));
    switch (opcao) {
        case "1":
            naruto();
            console.log("----------------------------------------------------------------------------------------------------------------------------------");
            mostrarMenu();
            break;
        case "2":
            onePiece();
            console.log("----------------------------------------------------------------------------------------------------------------------------------");
            mostrarMenu();
            break;
        case "3":
            pokemon();
            console.log("----------------------------------------------------------------------------------------------------------------------------------");
            mostrarMenu();
            break;
        case "4":
            console.log("Encerrando chat...");
            continuar = false;
            break;
        default:
            console.log("Opção inválida!");
            console.log("-----------------------------------------");
            mostrarMenu(); 
    }
}