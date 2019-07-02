const app = require('../../app').server;
const request = require("supertest")(app);

describe('Api activa', () => {
    after((done) => {
        done();
        proccess.exit(0);
    });
    it('Comprobar que el api responde en la raiz', () => {
        const { body } = request.get('/jwt/sign/jesus');
        console.log( body );
    });
});