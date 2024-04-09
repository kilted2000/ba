
const express= require('express');
const cors= require('cors');
const app = express();
//const auth = require('express-oauth2-jwt-bearer');

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

// const jwtCheck = auth({
//     audience: 'https://www.barkamigos.com/',
//     issuerBaseURL: 'https://dev-txcw3jo08qihcb5z.us.auth0.com/',
//     tokenSigningAlg: 'RS256'
// });

// // enforce on all endpoints
// app.use(jwtCheck);

// app.get('/authorized', function (req, res) {
//     res.send('Secured Resource');
// });

app.get("/", async (req, res) => {
 