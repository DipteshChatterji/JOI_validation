
const Joi = require("joi");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });


const signupSchema = Joi.array()
  .items(
    Joi.object().keys({
      payer: Joi.string()
        .min(2).max(10)
        .required()
        .error((errors) => {
          errors.forEach((err) => {
            switch (err.code) {
              case "any.required":
                err.message = " cannot be empty"
                break;
              case "string.min":
                err.message = `Value should have at least min characters`;
                break;
              case "string.max":
                err.message = `Value should have at least max characters`;
                break;
              default:
                break;
            }
          });
          return errors;
        }),



      payer_account_number: Joi.number().min(1000000000000000).positive().required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            case "number.base":
              err.message = "value must be a number";
              break;
            case "number.min":
              err.message = `Value should have at least 16 characters`;
              break;
            case "number.unsafe":
              err.message = `not safe`;
              break;
            case "number.positive":
              err.message = `Invalid  number`;
              break;
            // default:
            //   break;
          }
        });
        return errors;
      }),



      payee: Joi.string().min(3).max(10).required().error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            case "any.required":
              err.message = "name is not allowed to be empty";
              break;
            case "string.min":
              err.message = `Value should have at least min characters`;
              break;
            case "string.max":
              err.message = `Value should have at least max characters`;
              break;
            default:
              break;
          }
        });
        return errors;
      }),




      payee_account_number: Joi.number().min(1000000000000000).positive().required().disallow(Joi.ref("payer_account_number")).error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            case "number.base":
              err.message = "value must be a number";
              break;
            case "number.min":
              err.message = `Value should have at least 16 characters`;
              break;
            case "number.unsafe":
              err.message = `not safe`;
              break;
            case "number.positive":
              err.message = `number cannot be negative`;
              break;
              case "any.invalid":
              err.message = `A/C number should not be same`;
              break;
            // default:
            //   break;
          }
        });
        return errors;
      }),

      payment: Joi.number().positive().min(10).precision(2).required().error((errors) => {
        errors.forEach((err) => {
          switch (err.code) {
            case "number.base":
              err.message = "value must be a number";
              break;
            // case "number.integer":
            //   err.message = `Amount must be an integer`;
            //   break;
            case "number.min":
              err.message = `Amount must have some value`;
              break;
            case "number.positive":
              err.message = `Payment amount cannot be negative`;
              break;
            // default:
            //   break
          };
        });
        return errors;
      }),




    })
  )
  .min(1)
  .messages({
    "array.min": "array cannont be empty",
  });

exports.validatesignup = validator(signupSchema);
