const app = require('../../app').server;
const request = require("supertest")(app);

describe('Api activa', () => {
    after((done) => {
        done();
        proccess.exit(0);
    });
    it('Comprobar que el api responde en la raiz', () => {
        request.get('/api/user/list/').expect(500).expect(function (xx) {
            console.log(xx);
        });
    });
});