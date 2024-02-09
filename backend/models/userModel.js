import { Schema as _Schema, model } from "mongoose";


const Schema = _Schema;

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

const UserModel = model("item", userData);


export default UserModel;