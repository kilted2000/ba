//const DB = require("./db.json"); 
//const { saveToDatabase } = require("./utils");
//includes db commands
// const getAllUsers = (filterParams) => {
//   try {
//     let users = DB.users;
//     if (filterParams.breed) {
//       return DB.users.filter((breed) =>
//         user.breed.toLowerCase().includes(filterParams.breed)
//       );}
//     return users;
//   } catch (error) {
//     throw { status: 500, message: error };
//   }
// };
 const { PrismaClient } = require('@prisma/client');
 const prisma = new PrismaClient();
const getAllUsers = async (filterParams) => {
  try {
    let users;
    if (filterParams.breed) {
      users = await prisma.userprofile.findMany({
        where: {
          breed: {
            contains: filterParams.breed,
            mode: 'insensitive', // This makes the filter case-insensitive
          },
        },
      });
    } else {
      users = await prisma.userprofile.findMany();
      
    }
    return users;
  } catch (error) {
    throw { status: 500, message: error };
  }
};
const getOneUser = async (userId) => {
  try {
    const user = await prisma.userprofile.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw {
        status: 400,
        message: `Can't find user with the id '${userId}'`,
      };
    }
    return user;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewUser = async (newUser) => {
  try {
    const user = await prisma.userprofile.create({
      data: newUser,
    });
    return user;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneUser = async (userId, changes) => {
  try {
    const user = await prisma.userprofile.update({
      where: { id: userId },
      data: changes,
    });
    return user;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneUser = async (userId) => {
  try {
    await prisma.userprofile.delete({
      where: { id: userId },
    });
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// const getAllUsers = async (filterParams) => {
//   try {
//     let users;
//     if (filterParams.breed) {
//       users = await prisma.userprofile.findMany({
//         where: {
//           breed: {
//             contains: filterParams.breed,
//             mode: 'insensitive', // This makes the filter case-insensitive
//           },
//         },
//       });
//     } else {
//       users = await prisma.userprofile.findMany();
//     }
//     return users;
//   } catch (error) {
//     throw { status: 500, message: error };
//   }
// };
// const getOneUser = (userId) => {
//   try {
//     const user = DB.userProfile.find((user.id));
//     if (!user) {
//       throw {
//         status: 400,
//         message: `Can't find user with the id '${userId}'`,
//       };
//     }
//     return user;
//   } catch (error) {
//     throw { status: error?.status || 500, message: error?.message || error };
//   }
// };

// const createNewUser = (newUser) => {
//   try {
//     const isAlreadyAdded =
//       DB.userProfile.findIndex((userprofile) => userprofile.name === newuUserProfile.name) > -1;
//     if (isAlreadyAdded) {
//       throw {
//         status: 400,
//         message: `User with the name '${newUserProfile.name}' already exists`,
//       };
//     }
//     DB.userProfile.push(newUserProfile);
//     saveToDatabase(DB);
//     return newUserProfile;
//   } catch (error) {
//     throw { status: error?.status || 500, message: error?.message || error };
//   }
// };

// const updateOneUser = (userId, changes) => {
//   try {
//     const isAlreadyAdded =
//       DB.userProfile.findIndex((userProfile) => userProfile.name === changes.name) > -1;
//     if (isAlreadyAdded) {
//       throw {
//         status: 400,
//         message: `User with the name '${changes.name}' already exists`,
//       };
//     }
//     const indexForUpdate = DB.userProfile.findIndex(
//       (user) => user.id === userId
//     );
//     if (indexForUpdate === -1) {
//       throw {
//         status: 400,
//         message: `Can't find user with the id '${userId}'`,
//       };
//     }
//     const updatedUser = {
//       ...DB.userProfile[indexForUpdate],
//       ...changes,
//       updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
//     };
//     DB.userProfile[indexForUpdate] = updatedUser;
//     saveToDatabase(DB);
//     return updatedUser;
//   } catch (error) {
//     throw { status: error?.status || 500, message: error?.message || error };
//   }
// };

// const deleteOneUser = (userId) => {
//   try {
//     const indexForDeletion = DB.userProfile.findIndex(
//       (userProfile) => userProfile.id === userId
//     );
//     if (indexForDeletion === -1) {
//       throw {
//         status: 400,
//         message: `Can't find user with the id '${workoutId}'`,
//       };
//     }
//     DB.userProfile.splice(indexForDeletion, 1);
//     saveToDatabase(DB);
//   } catch (error) {
//     throw { status: error?.status || 500, message: error?.message || error };
//   }
// };



module.exports = {
  getAllUsers,
  createNewUser,
  getOneUser,
  updateOneUser,
  deleteOneUser,
};