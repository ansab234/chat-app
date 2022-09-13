const express = require("express");
const { accessChat, fetchChats } = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat); // create one on one chat
router.route("/").get(protect, fetchChats);

module.exports = router;
