const request = require("supertest");
const app = require('./app');
const mongoose = require("mongoose");

beforeEach(async () => {
    await mongoose.connect(process.env.DB_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
})

// test('getName should return a user name', () => {
//     request(app.app)
//     .get("/users/649ecfff30ee3a0d92d015f4")
// })

afterEach(async () => {
    await mongoose.connection.close();
})

describe('getName', () => {
    it('should return a user name', async () => {
        const res = await request(app.app).get("/users/649ecfff30ee3a0d92d015f4")
        expect(res.statusCode).toBe(200)
    })
})