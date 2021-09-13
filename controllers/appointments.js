const appoinment = require('./../models/appointments');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('Olá da rota principal 💯🆗💹');
    })

    app.get('/atendimentos', (req, res) => {
        appoinment.listAppointment(res);
        console.log('Consulta realizada na  rota de Atendimentos 💯🆗💹 ');
    })
    // retorna apenas o objeto com o ID enviado via parâmetro
    app.get('/atendimentos/:id', (req, res) => {
        //convertando o id passado em string para int pois no DB está como int
        const id = parseInt(req.params.id);
        appoinment.listById(id, res);

    })

    app.post('/atendimentos', (req, res) => {
        const appoinments = req.body
        appoinment.addNewAppointment(appoinments, res);
    });
}
