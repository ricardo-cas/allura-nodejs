const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao')

const port = process.env.PORT || 3000;

conexao.connect(error => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Conectado com sucesso na Base`)

        const app = customExpress()

        app.listen(port, () => {
            console.log(`Servidor ouvindo na porta ${port}`);
        });
    }
})
