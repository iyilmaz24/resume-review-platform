const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel");


/* GET testing route. */
router.get('/', function(req, res, next) {
  try {
    res.send("Admin Page Requested.")
  } catch(error) {
    console.log(error)
  }
});


// display all currently uploaded submissions
router.get("/submissions", async (req, res) => {


  try {
    // res.send("admin/submissions route requested.")
    const mongoData = await UserModel.find()

    res.json(mongoData)

  } catch(error) {
    console.log(error)
  }



});


module.exports = router;
