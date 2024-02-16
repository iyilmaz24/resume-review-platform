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

  const postData = req.body;
  const postFile = req.files[0];
    // postFile is a JSON object{
      //   fieldname: 'file',
      //   originalname: 'blob',
      //   encoding: '7bit',
      //   mimetype: 'application/pdf',
      //   buffer: <Buffer 25 50 44 46 2d 31 2e 34 0a 25 d3 eb e9 e 0a 31 ... 767329 more bytes>,
      //   size: 7673791
      // }
    // console.log(postFile);

    
  // res.setHeader('Content-Type', 'application/json');

  try {
    let newUser = new UserRecord({
        instagram: postData.instagram,
        discord: postData.discord,
        file_name: postData.fileName, 
        collection: postData.collection,
        file: postFile,
      })
    await newUser.save();
    console.log(`${req.fileN} was saved.`)
  } 
  catch (err) {
    console.log(err);
  }


  res.send(`instagram: ${postData.collection} ${postData.fileName}`);
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
