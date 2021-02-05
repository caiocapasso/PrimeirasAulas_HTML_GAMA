const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Pedra (1), Papel (2) ou Tesoura (3)? ', resposta => {
    const opcoes = {
        1: 'pedra',
        2: 'papel',
        3: 'tesoura'
    };

    const escolhaUsuario = resposta;
    //const escolhaComputador = Math.round(Math.random() * 2) + 1;
    const escolhaComputador = Math.floor(Math.random()*(3-1+1)+1); 

    console.log('Você: ' + opcoes[escolhaUsuario]);
    console.log('Computador: ' + opcoes[escolhaComputador]);
    
    if (escolhaUsuario === 1){
        if (escolhaComputador === 1){
            console.log('empate');
        } else if (escolhaComputador === 2){
            console.log('voce perdeu');
        } else {
            console.log('voce ganhou');
        }
    } else if (escolhaUsuario === 2){
        if (escolhaComputador === 1){
            console.log('voce ganhou');
        } else if (escolhaComputador === 2){
            console.log('empatou');
        } else {
            console.log('voce perdeu');
        }       
    } else {
        if (escolhaComputador === 1){
            console.log('voce perdeu');
        } else if (escolhaComputador === 3){
            console.log('empatou');
        } else {
            console.log('voce ganhou');
        }  
    }

    rl.close();
})
