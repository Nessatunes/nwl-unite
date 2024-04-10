import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";

// src/error-handler.ts
import { ZodError } from "zod";
var errorHandler = (error, request, reply) => {
  const { validation, validationContext } = error;
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Error during Validation",
      errors: error.format()._errors
    });
  }
  if (error instanceof BadRequest) {
    return reply.status(400).send({ message: error.message });
  }
  return reply.status(500).send({ message: "Internal sever error!" });
};

export {
  errorHandler
};
