
import UserModel from "#Schemas/user.schemas.js";


const userProfileController = async (req, res) => {
    const { id } = req;

    const existingUserById = await UserModel.findById(id).exec();
    if (!existingUserById)
        return res.status(401).send({ errors: ['Usuario no autorizado0'] });

    const { _id, name, surname, email } = existingUserById;

    return res.send({ _id, name, surname, email });
};

export default userProfileController;
