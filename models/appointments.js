const connection = require('./../infraestrutura/connection');
const moment = require('moment');

class Appoinment {
    addNewAppointment(appoinment, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(appoinment.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const atendimentoDatado = { ...appoinment, dataCriacao, data }
        const sql = 'INSERT INTO appointments SET ?';

        const isDateValid = moment(data).isSameOrAfter(dataCriacao);
        const isClientValid = appoinment.cliente.length >= 5;
        const validations = [
            {
                nome: 'data',
                valid: isDateValid,
                error_message: 'Data deve ser maior ou igual à data atual'
            },
            {
                nome: 'cliente',
                valid: isClientValid,
                error_message: 'Cliente deve ter pelo menos 5 caracteres'
            }
        ];
        // se o campo não for válido, ele vai retornar quais campos
        const errors = validations.filter(fields => !fields.valid);
        // vai verificar qual o tamanho da lista de erros, para assim fazer a validação abaixo
        const hasErrors = errors.length;

        if (hasErrors) {
            res.status(400).json(errors);
        } else {
            connection.query(sql, atendimentoDatado, (error, result) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(201).json(result); //passando o status 201 created como resposta para indicar que foi criado.
                }
            });
        }
    }
    listAppointment(res) {
        const sql = 'SELECT * FROM appointments'
        connection.query(sql, (error, results) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        })
    }
    listById(id, res) {
        const sql = `SELECT * FROM appointments WHERE id=${id}`
        connection.query(sql, (error, results) => {
            const uniqueAppointment = results[0]
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(uniqueAppointment);
            }
        })
    }
}

module.exports = new Appoinment;