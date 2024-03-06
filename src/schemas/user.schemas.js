import mongoose from "mongoose";
const { Schema } = mongoose;

// validacion EXTRA en BBDD
const userSchema = new Schema({
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
  },
  password: {
    type: String,
    require: true,
  }
});

const userModel = model("User", userSchema);
export default userModel;