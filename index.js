const express = require('express');


const app = express();

app.listen(3000, () => {
    console.log(`Servidor ouvindo na porta 3000`);
});

app.get('/', (req, res) => {
    res.send('Olá da rota principal 💯🆗💹');
})

app.get('/atendimentos', (req, res) => {
    res.send('Olá da rota de Atendimentos 🔘👨🏻‍⚕️');
})