
import UserModel from "#Schemas/user.schemas.js";
import { compare } from "bcrypt";


const userUpdateEmailController = async (req, res) => {
    const { id } = req;
    
    const { email, password } = req.body;   // new email

    const existingUserById = await UserModel.findById(id).exec();
    if (!existingUserById)
        return res.status(401).send({ errors: ['Usuario no autorizado'] });

    const checkPassword = await compare(password, existingUserById.password);
    if (!checkPassword) return res.status(401).send("Credenciales incorrectas");

    // si todo esta ok actualizamos el email
    existingUserById.email = email;
    

    await existingUserById.save();

    return res.send('Email del usuario actualizado');
};
export default userUpdateEmailController;
