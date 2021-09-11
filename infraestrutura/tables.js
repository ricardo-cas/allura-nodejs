class Tables {
    init(connection) {
        this.connection = connection;
        this.createAppointments();
    }

    createAppointments() {
        const sql = 'CREATE TABLE IF NOT EXISTS APPOINTMENTS (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

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
