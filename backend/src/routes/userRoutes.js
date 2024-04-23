const express = require("express");
const apicache = require("apicache");
const userController = require("../../controllers/userController");

const router = express.Router();
const cache = apicache.middleware;

router.get("/users", cache("2 minutes"), userController.getAllUsers);

router.get("/:userId", userController.getOneUser);

router.post("/", userController.createNewUser);

router.patch("/:userId", userController.updateOneUser);

router.delete("/:userId", userController.deleteOneUser);

router.get("/", cache("2 minutes"),  userController.getAllUsers);


module.exports = router;