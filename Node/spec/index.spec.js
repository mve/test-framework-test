let Request = require('request');

describe("Server", () => {
    let server;
    beforeAll(() => {
        server = require('../src/index');
    });
   afterAll(() => {
        server.close();
    });
    describe("GET /", () => {
        let data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            })
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body).toBe("Hello World!");
        });
    });
});
