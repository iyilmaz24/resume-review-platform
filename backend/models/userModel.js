const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userData = new Schema({
    instagram: {type: String, 
        required: true,
        unique: true,
        trim: true,
        minLength: 3,
    },
    discord: {type: String, 
        required: true,
        unique: true,
        trim: true,
        minLength: 3,
    },
    file_name: {type: String, 
        required: true,
        unique: true,
        trim: true,
        minLength: 3,
    },
    date: () => Date.now(),
})

const UserModel = mongoose.model("item", userData);


module.exports = UserModel;