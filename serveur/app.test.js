const request = require("supertest");
const app = require('./app');
const mongoose = require("mongoose");

// Fonction pour se connecter à la base de données avant le test. 
// Nécessaire car le test ne peut pas run sur des fonctions en lien avec la bdd. 
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

// Fonction pour se déconnecter de la bdd après le test. 
afterEach(async () => {
    await mongoose.connection.close();
})

// Ici test de la fonction getName. 
describe('getName', () => {
    it('should return a user name', async () => {
        const res = await request(app).get("/users/name/Lovelace")
        expect(res.statusCode).toBe(200)
    })
})