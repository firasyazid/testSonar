const request = require('supertest');
const app = require('../app'); // Assuming your Express app is in app.js
const mongoose = require('mongoose');
require('dotenv/config');
  
beforeAll(async () => {
  await mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Health_App',
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('Database Connection', () => {
  test('Should connect to the database', async () => {
    await new Promise(resolve => {
      mongoose.connection.on('connected', () => {
        resolve();
      });
    });

    expect(mongoose.connection.readyState).toBe(1);
  });
});

  

describe('GET /', () => {
  test('It should respond with status 200 and "Hello, gitlab! This is a Node.js application."', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, gitlab! This is a Node.js application.');
  });
});
