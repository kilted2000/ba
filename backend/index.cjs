
const express= require('express');
const cors= require('cors');
const bodyParser = require("body-parser");
const apicache = require("apicache");
const { PrismaClient } = require('@prisma/client');
const app = express();
//const cache = apicache.middleware;
const prisma = new PrismaClient();
const { auth } = require('express-oauth2-jwt-bearer');

const userRoutes = require('./src/routes/userRoutes.cjs'); 

//app.use(cors());
//app.use(express.json());


app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json());

//app.use(cache("2 minutes"));

const port = process.env.PORT || 8080;

// app.get('/users', async (req, res) => {
//   try {
//     const allUsers = await prisma.userprofile.findMany();
//     res.json(allUsers);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ status: 'FAILED', data: { error: error.message } });
//   }
// });

// async function main() {
//   const allUsers = await prisma.userprofile.findMany();
//   app.get('/users', (req, res) => {
//     res.json(allUsers);
//   });
// }
// main()
//   .then(() => {
//     console.log('Starting server...');
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   })

// main()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   })
  // .catch(async (e) => {
  //   console.error(e);
  //   await prisma.$disconnect();
  //   process.exit(1);
  // });




const jwtCheck = auth({
    audience: 'https://dev-txcw3jo08qihcb5z.us.auth0.com/api/v2/',
    issuerBaseURL: 'https://dev-txcw3jo08qihcb5z.us.auth0.com/',
    algorithms: ['RS256'],
    jwksUri: 'https://dev-txcw3jo08qihcb5z.us.auth0.com/.well-known/jwks.json'
});

app.use(jwtCheck);
app.use('/', userRoutes);
app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});




app.get("/", async (req, res) => {
    res.json({ message: "Great Job! It works!" });
  });
  // app.get('/users', async (req, res) => {
  //   const allUsers = await prisma.userprofile.findMany();
  //   res.json(allUsers);
  // });
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;