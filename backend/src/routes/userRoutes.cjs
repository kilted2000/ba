// const express = require("express");
// //const apicache = require("apicache");
// const userController = require("../controllers/userController.cjs");


// const router = express.Router();
// //const cache = apicache.middleware;

// router.get("/api/users", userController.getAllUsers);

// router.get("/api/users/:userId", userController.getOneUser);

// router.post("/api/users", userController.createNewUser);

// router.patch("/api/users/:userId", userController.updateOneUser);

// router.delete("/api/users/:userId", userController.deleteOneUser);

// //router.get("/users", cache("2 minutes"),  userController.getAllUsers);


// module.exports = router;

const express = require("express");
const { requiredScopes } = require('express-oauth2-jwt-bearer');
const userController = require("../controllers/userController.cjs");

const router = express.Router();

router.get("/api/users", requiredScopes('read:users'), userController.getAllUsers);
router.get("/api/users/:userId", requiredScopes('read:users'), userController.getOneUser);
router.post("/api/users", requiredScopes('create:users'), userController.createNewUser);
router.patch("/api/users/:userId", requiredScopes('update:users'), userController.updateOneUser);
router.delete("/api/users/:userId", requiredScopes('delete:users'), userController.deleteOneUser);

module.exports = router;
