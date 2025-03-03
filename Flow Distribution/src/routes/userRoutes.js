// const express = require("express");
// const {
//   getAllUsers,
//   getUserById,
//   registerUser,
//   updateUser,
//   deleteUser,
// } = require("../controllers/userController");

// const router = express.Router();

// router.post("/signup", registerUser);
// router.get("/", getAllUsers);
// router.get("/:id", getUserById);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

// module.exports = router;





const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// User authentication routes
router.post("/signup", userController.registerUser);
router.post("/login", userController.loginUser);

// User management routes
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
