import mongoose from "mongoose";
const { Schema, model } = mongoose;

// validacion EXTRA en BBDD
const userSchema = new Schema({
  _id: {
    type: String,
    _id: false
  },
  name: {
    type: String,
    require: true,
    minLenght: 2,
    maxLenght: 20
  },
  surname: {
    type: String,
    require: true,
    minLenght: 4,
    maxLenght: 50
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  }
});

const UserModel = model("User", userSchema);
export default UserModel;