const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
const port = process.env.PORT || 8080;
const app = express();
const prisma = new PrismaClient();
const userRoutes = require('./src/routes/userRoutes.cjs');

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json());



const jwtCheck = auth({
  audience: 'https://dev-txcw3jo08qihcb5z.us.auth0.com/api/v2/',
  issuerBaseURL: 'https://dev-txcw3jo08qihcb5z.us.auth0.com/',
  algorithms: ['RS256'],
  jwksUri: 'https://dev-txcw3jo08qihcb5z.us.auth0.com/.well-known/jwks.json'
});

app.use(jwtCheck);
app.use('/', userRoutes);

app.get('/authorized', requiredScopes('read:users'), (req, res) => {
  res.send('Secured Resource');
});

app.get("/", (req, res) => {
  res.json({ message: "Great Job! It works!" });
});

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;

// const express= require('express');
// const cors= require('cors');
// const bodyParser = require("body-parser");
// const apicache = require("apicache");
// const { PrismaClient } = require('@prisma/client');
// const app = express();
// //const cache = apicache.middleware;
// const prisma = new PrismaClient();
// const { auth } = require('express-oauth2-jwt-bearer');

// const userRoutes = require('./src/routes/userRoutes.cjs'); 

// //app.use(cors());
// //app.use(express.json());


// app.use(cors({
//   origin: 'http://localhost:5173', 
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// }));
// app.use(bodyParser.json());
// app.use(express.json());

// //app.use(cache("2 minutes"));

// const port = process.env.PORT || 8080;

// // app.get('/users', async (req, res) => {
// //   try {
// //     const allUsers = await prisma.userprofile.findMany();
// //     res.json(allUsers);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ status: 'FAILED', data: { error: error.message } });
// //   }
// // });

// // async function main() {
// //   const allUsers = await prisma.userprofile.findMan