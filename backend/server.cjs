
const express= require('express');
const cors= require('cors');
const bodyParser = require("body-parser");
const apicache = require("apicache");
const { PrismaClient } = require('@prisma/client');
const app = express();
const cache = apicache.middleware;
const prisma = new PrismaClient();
//const auth = require('express-oauth2-jwt-bearer');

//*****const v1WorkoutRouter = require("./v1/routes/workoutRoutes"); add when routes are created--app.use("/api/workouts", v1WorkoutRouter);******

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cache("2 minutes"));

const port = process.env.PORT || 8080;

// async function main() {
//   const allUsers = await prisma.userprofile.findMany()
//   console.log(allUsers)
// }


// main()
// .then(async () => {
// await prisma.$disconnect()
// })
// .catch(async (e) => {
// console.error(e)
// await prisma.$disconnect()
// process.exit(1)
// })

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
    res.json({ message: "success" });
  });

app.listen(port, () => console.log(`Server running on port ${port}`));

