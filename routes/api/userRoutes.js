const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users GET all and POST user
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId GET one user, PUT and DELETE by iD
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

//  /api/users/:userId/reactions POST new reactions
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
