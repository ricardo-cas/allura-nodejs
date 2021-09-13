const appoinment = require('./../models/appointments');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('Olá da rota principal 💯🆗💹');
    })

    app.get('/atendimentos', (req, res) => {
        appoinment.listAppointment(res);
        console.log('Olá da rota de Atendimentos 🔘👨🏻‍⚕️');
    })

    app.post('/atendimentos', (req, res) => {
        const appoinments = req.body
        appoinment.addNewAppointment(appoinments, res);
    });
}
