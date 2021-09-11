const connection = require('./../infraestrutura/connection');
const moment = require('moment');

class Appoinment {
    addNewAppointment(appoinment) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(appoinment.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const atendimentoDatado = { ...appoinment, dataCriacao, data }
        const sql = 'INSERT INTO appointments SET ?';

        connection.query(sql, atendimentoDatado, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
            }
        })
    }
}

module.exports = new Appoinment;