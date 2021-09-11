class Tables {
    init(connection) {
        this.connection = connection;
        this.createAppointments();
    }

    createAppointments() {
        const sql = 'CREATE TABLE IF NOT EXISTS APPOINTMENTS (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, status_appointments varchar(20) NOT NULL, notes text, PRIMARY KEY(id))'

        this.connection.query(sql, (error) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Tabela Atendimentos criada com sucesso! 💹🆗');
            }
        })
    }
}

module.exports = new Tables;
