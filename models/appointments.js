const connection = require('./../infraestrutura/connection');

class Appoinment {
    addNewAppointment(appoinment) {
        const sql = 'INSERT INTO appointments SET ?'

        connection.query(sql, appoinment, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
            }
        })
    }
}

module.exports = new Appoinment;