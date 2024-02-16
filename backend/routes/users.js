const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel");



/* GET testing route. */
router.get('/', function(req, res, next) {
  try {
    res.send("/users Requested.")
  } catch(error) {
    console.log(error)
  }
});


const UserRecord = UserModel;

// make a new submission
router.post("/submission", async (req, res) => {

  const postData = req.body;
  // const postFile = req.files[0];
  const postFileBuffer = req.files[0].buffer;

    // postFile is a JSON object{
      //   fieldname: 'file',
      //   originalname: 'blob',
      //   encoding: '7bit',
      //   mimetype: 'application/pdf',
      //   buffer: <Buffer 25 50 44 46 2d 31 2e 34 0a 25 d3 eb e9 e 0a 31 ... 767329 more bytes>,
      //   size: 7673791
      // }
    // console.log(postFile);

  try {
    let newUser = new UserRecord({
        instagram: postData.instagram,
        discord: postData.discord,
        file_name: postData.fileName, 
        group: postData.group,
        fileBuffer: postFileBuffer,
      })
    await newUser.save();
    console.log(`${req.fileN} was saved.`)
  } 
  catch (err) {
    console.log(err);
  }

  // res.send(`instagram: ${postData.collection} ${postData.fileName}`)
});


module.exports = router;

