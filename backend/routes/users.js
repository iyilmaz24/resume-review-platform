const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello World');
  console.log("Hello World");
});


const UserRecord = UserModel;

// make a new submission
router.post("/submission", async (req, res) => {
  try {
    let newUser = new UserRecord({
        instagram: req.igAt,
        discord: req.discAt,
        file_name: req.fileN, })

    await newUser.save();
    console.log(`${req.fileN} was saved.`)
    res.redirect("/success-page");
  } 
  catch (err) {
      console.log(err)
      res.redirect("/submission-error");
  }
});


// display all currently uploaded submissions
router.get("/records", async (req, res) => {
  try {
    const items = await UserRecord.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
  console.log(JSON.stringify(res));
});




module.exports = router;
