
import { SignJWT } from "jose"; 

import { compare } from "bcrypt";
import UserModel from "#Schemas/user.schemas.js";


const userLoginController = async(req, res) => {
  const {email, password} = req.body

  const existingUserByEmail = await UserModel.findOne({email}).exec();
  if (!existingUserByEmail) return res.status(401).send("Credenciales incorrectas");

  const checkPassword = await compare(password, existingUserByEmail.password);
  if (!checkPassword) return res.status(401).send("Credenciales incorrectas");
  
  // generar un JSON web token JWT
  const jwtConstructor = new SignJWT({ id: existingUserByEmail._id });
  const encoder = new TextEncoder()
  const jwt = await jwtConstructor
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY))
  
  return res.send({jwt})

};

export default userLoginController