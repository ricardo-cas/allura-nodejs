const appoinment = require('./../models/appointments');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('Olรก da rota principal ๐ฏ๐๐น');
    })

    app.get('/atendimentos', (req, res) => {
        res.send('Olรก da rota de Atendimentos ๐๐จ๐ปโโ๏ธ');
    })

    app.post('/atendimentos', (req, res) => {
        const appoinments = req.body
        appoinment.addNewAppointment(appoinments);
        res.send('Post funcionando ๐ฏ๐๐น');
    });
}
