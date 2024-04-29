
const User = require("../database/User.cjs");
//performs crud operation I wrote in workout.js
const getAllUsers = async (filterParams) => {
  try {
    const allUsers = await User.getAllUsers(filterParams);
    return allUsers;
  } catch (error) {
    throw error;
  }
};

const getOneUser = async (userId) => {
  try {
    const user = await User.getOneUser(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

const createNewUser = async (newUser) => {
  const userToInsert = await {
    ...newUser,
  };
  try {
    const createdUser = await User.createNewUser(userToInsert);
    return createdUser;
  } catch (error) {
    throw error;
  }
};

const updateOneUser = async (userId, changes) => {
  try {
    const updatedUser = await User.updateOneUser(userId, changes);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteOneUser = async (userId) => {
  try  {
  await User.deleteOneUser(userId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};