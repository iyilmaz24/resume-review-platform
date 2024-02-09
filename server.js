import express from "express";
import mongoose from "mongoose";
import UserModel from "./backend/models/userModel";


const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect("mongodb://localhost/your_database_name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const UserRecord = UserModel;

// make a new submission
app.post("/submission", async (req, res) => {
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
app.get("/records", async (req, res) => {
  try {
    const items = await UserRecord.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
  console.log(JSON.stringify(res));
});
