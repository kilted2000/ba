// const userService = require("../services/userService.cjs");
// //modify the workoutService.js file
// const getAllUsers = async (req, res) => {
//     const { breed } = req.query;
//   try {
//     const allUsers = await userService.getAllUsers({ breed });
//     res.send({ status: "OK", data: allUsers });
       
//   } catch (error) {
//     res
//       .status(error?.status || 500)
//       .send({ status: "FAILED", data: { error: error?.message || error } })
      
//   }
// };
// const getOneUser = async (req, res) => {
//   const { user } = req;
//   if (!user) {
//     res.status(401).send({ status: "FAILED", data: { error: "Unauthorized" } });
//     return;
//   }
//   try {
//     const user = await userService.getOneUser(user.sub);
//     res.send({ status: "OK", data: user });
//   } catch (error) {
//     res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
//   }
// };
// // const getOneUser = async (req, res) => {
// //   const {
// //     params: { userId },
// //   } = req;
// //   if (!userId) {
// //     res
// //       .status(400)
// //       .send({
// //         status: "FAILED",
// //         data: { error: "Parameter ':userId' can not be empty" },
// //       });
// //   }
// //   try {
// //     const user = await userService.getOneUser(userId);
// //     res.send({ status: "OK", data: user });
// //   } catch (error) {
// //     res
// //       .status(error?.status || 500)
// //       .send({ status: "FAILED", data: { error: error?.message || error } });
// //   }
// // };

// const createNewUser = async (req, res) => {
//   const { body } = req;
//   if (
//     !body.firstName ||
//     !body.lastName ||
//     !body.email ||
//     !body.dogName ||
//     !body.breed ||
//     !body.personality
//   ) {
//     res
//       .status(400)
//       .send({
//         status: "FAILED",
//         data: {
//           error:
//             "One of the following keys is missing or is empty in request body: 'first name', 'last name', 'email', 'dog name', 'breed', 'personality'",
//         },
//       });
//     return;
//   }
//   const newUser = await {
//     firstName: body.firstName ,
//     lastName: body.lastName ,
//     email: body.email ,
//     dogName: body.dogName ,
//     breed: body.breed,
//     personality: body.personality,
//   };
//   try {
//     const createdUser = await userService.createNewUser(newUser);
//     res.status(201).send({ status: "OK", data: createdUser });
//   } catch (error) {
//     res
//       .status(error?.status || 500)
//       .send({ status: "FAILED", data: { error: error?.message || error } });
//   }
// };

// const updateOneUser = async (req, res) => {
//   const {
//     body,
//     params: { userId },
//   } = req;
//   if (!userId) {
//     res
//       .status(400)
//       .send({
//         status: "FAILED",
//         data: { error: "Parameter ':userId' can not be empty" },
//       });
//   }
//   try {
//     const updatedUser = await userService.updateOneUser(userId, body);
//     res.send({ status: "OK", data: updatedUser });
//   } catch (error) {
//     res
//       .status(error?.status || 500)
//       .send({ status: "FAILED", data: { error: error?.message || error } });
//   }
// };

// const deleteOneUser = async (req, res) => {
//   const {
//     params: { userId },
//   } = req;
//   if (!userId) {
//     res
//       .status(400)
//       .send({
//         status: "FAILED",
//         data: { error: "Parameter ':userId' can not be empty" },
//       