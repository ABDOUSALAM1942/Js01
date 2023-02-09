afficherNombres(20);

function afficherNombres(limite) {
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0)
            console.log('Paire');
        else console.log('Impaire');
    }
}