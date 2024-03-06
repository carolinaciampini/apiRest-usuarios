// validacion y register

import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import { emailDTOSchema, idDTOSchema, nameDTOSchema, passwordDTOSchema, surnameDTOSchema } from "#Lib/dto-types.js";

const UnRegisterDTOSchema = Type.Object({

  password: passwordDTOSchema
});

const ajv = new Ajv({allErrors: true}).addKeyword("kind").addKeyword("modifier");;
ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

addErrors(ajv);

const validateSchema = ajv.compile(UnRegisterDTOSchema);

const userUnRegisterDTO = (req, res, next) => {
  const isDTOValid = validateSchema(req.body) // true false

  if (!isDTOValid)
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });
  
  next();
};

export default userUnRegisterDTO;


