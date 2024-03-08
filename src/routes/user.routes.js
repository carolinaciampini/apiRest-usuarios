import userLoginDTO from "#Dto/user-login.dto.js";
import userRegisterDTO from "#Dto/user-register.dto.js";
import userUpdateDataDTO from "#Dto/user-update-data.dto.js";
import { Router } from "express";

import userJWTDTO from "#Dto/user-jwt.dto.js";
import userRegisterController from "#Controllers/user-register.controller.js";
import userLoginController from "#Controllers/user-login.controller.js";
import userProfileController from "#Controllers/user-profile.controller .js";
import userUpdateDataController from "#Controllers/user-updateData.controller.js";

import userUnRegisterDTO from "#Dto/user-Unregister.dto.js";
import userUpdatePasswordDTO from "#Dto/user-updated-password.dto.js";
import userUpdateEmailDTO from "#Dto/user-update-email.dto copy.js";
import userUpdateEmailController from "#Controllers/user-updateEmail.controller.js";
import userUpdatePasswordController from "#Controllers/user-updatePassword.controller.js";
import userUnregisterController from "#Controllers/user-unregister.controller.js";


const userRouter = Router(); // mini app de express

// post > registrar data
userRouter.post("/register", userRegisterDTO, userRegisterController);

// 
userRouter.post("/login", userLoginDTO,  userLoginController);

// perfil
userRouter.get("/profile", userJWTDTO, userProfileController);

// actualizar 
userRouter.patch("/update-data",userJWTDTO, userUpdateDataDTO, userUpdateDataController)


// actualizar 
userRouter.patch("/update-email", userJWTDTO, userUpdateEmailDTO, userUpdateEmailController)



// actualizar 
userRouter.patch("/update-password", userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController)


// eliminar datos
userRouter.delete("/unregister", userJWTDTO, userUnRegisterDTO, userUnregisterController );


export default userRouter