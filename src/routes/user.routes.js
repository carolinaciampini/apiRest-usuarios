import userLoginDTO from "#Dto/user-login.dto.js";
import userRegisterDTO from "#Dto/user-register.dto.js";
import userUpdateDataDTO from "#Dto/user-update-data.dto.js";
import userUpdateEmailDTO from "#Dto/user-update-email.dto copy.js";

import { Router } from "express";
import userUnRegisterDTO from "#Dto/user-Unregister.dto.js";
import userUpdatePasswordDTO from "#Dto/user-updated-password.dto.js";

const userRouter = Router(); // mini app de express

// post > registrar data
userRouter.post("/register", userRegisterDTO);

// 
userRouter.post("/login", userLoginDTO );

userRouter.get("/profile", );

// actualizar 
userRouter.patch("/update-data", userUpdateDataDTO)


// actualizar 
userRouter.patch("update-email", userUpdateEmailDTO)



// actualizar 
userRouter.patch("update-password", userUpdatePasswordDTO)


// eliminar datos
userRouter.delete("/unregister", userUnRegisterDTO);


export default userRouter