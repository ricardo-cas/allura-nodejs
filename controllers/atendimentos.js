module.exports = app => {
    app.get('/', (req, res) => {
        res.send('Olá da rota principal 💯🆗💹');
    })

    app.get('/atendimentos', (req, res) => {
        res.send('Olá da rota de Atendimentos 🔘👨🏻‍⚕️');
    })
}
