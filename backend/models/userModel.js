const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userData = new Schema({
    instagram: {type: String, 
        required: true,
        trim: true,
        minLength: 3,
    },
    discord: {type: String, 
        required: true,
        trim: true,
        minLength: 3,
    },
    file_name: {type: String, 
        required: true,
        trim: true,
        minLength: 3,
    },
    group: {type: String, 
        required: true,
        trim: true,
        minLength: 3,
    },
    fileBuffer: {
        type: Buffer,
    },
})

const UserModel = mongoose.model("user_submissions", userData);


module.exports = UserModel;