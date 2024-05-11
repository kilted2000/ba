const express = require("express");
//const apicache = require("apicache");
const userController = require("../controllers/userController.cjs");


const router = express.Router();
//const cache = apicache.middleware;

router.get("/api/users", userController.getAllUsers);

router.get("/api/users/:userId", userController.getOneUser);

router.post("/api/users", userController.createNewUser);

router.patch("/api/users/:userId", userController.updateOneUser);

router.delete("/api/users/:userId", userController.deleteOneUser);

//router.get("/users", cache("2 minutes"),  userController.getAllUsers);


module.exports = router;