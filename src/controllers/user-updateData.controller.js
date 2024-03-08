
import UserModel from "#Schemas/user.schemas.js";


const userUpdateDataController = async (req, res) => {
    const { id } = req;
    console.log("ID:", id);
    const { name, surname } = req.body;

    const existingUserById = await UserModel.findById(id).exec();
    if (!existingUserById)
        return res.status(401).send({ errors: ['Usuario no autorizadoo'] });

    existingUserById.name = name;
    existingUserById.surname = surname;

    await existingUserById.save();

    return res.send('Usuario actualizado');
};
export default userUpdateDataController;
