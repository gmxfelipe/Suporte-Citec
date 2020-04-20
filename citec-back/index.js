const app = require('./config/express');
app().listen(3006, () => {
    console.log('CITEC na porta 3006');
});
//inicia o servidor