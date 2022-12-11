import * as Yup from "yup";

const validations = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).required(),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")])
    .required(),
});

export default validations;
