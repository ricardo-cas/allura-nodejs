const customExpress = require('./config/customExpress');
const dbConnection = require('./infraestrutura/connection');
const tables = require('./infraestrutura/tables');

const port = process.env.PORT || 3000;

dbConnection.connect(error => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Conectado com sucesso na Base`);
        tables.init(dbConnection);

        const app = customExpress()

        app.listen(port, () => {
            console.log(`Servidor ouvindo na porta ${port}`);
        });
    }
})
