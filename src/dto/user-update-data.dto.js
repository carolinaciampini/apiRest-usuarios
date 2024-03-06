// validacion y register

import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import { emailDTOSchema, idDTOSchema, nameDTOSchema, passwordDTOSchema, surnameDTOSchema } from "#Lib/dto-types.js";

const UpdateDataDTOSchema = Type.Object({
 name: nameDTOSchema,
  surname: surnameDTOSchema,
  
});

const ajv = new Ajv({allErrors: true}).addKeyword("kind").addKeyword("modifier");
addErrors(ajv);

const validateSchema = ajv.compile(UpdateDataDTOSchema);

const userUpdateDataDTO = (req, res, next) => {
  const isDTOValid = validateSchema(req.body) // true false

  if (!isDTOValid)
        return res.status(400).send({
            errors: validateSchema.errors.map((error) => error.message),
        });
  
  next();
};

export default userUpdateDataDTO;


