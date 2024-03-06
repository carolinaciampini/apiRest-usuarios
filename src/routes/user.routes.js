import { Router } from "express";

const userRouter = Router(); // mini app de express

// post > registrar data
userRouter.post("/register", );

// 
userRouter.post("/login");

userRouter.get("/profile");

// actualizar 
userRouter.patch("/update-data")


// actualizar 
userRouter.patch("update-email")



// actualizar 
userRouter.patch("update-password")


// eliminar datos
userRouter.delete("/unregister");


export default userRouter