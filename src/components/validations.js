import * as Yup from "yup";

const validations = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir email girin.")
    .required("*Zorunlu alan"),
  password: Yup.string()
    .min(5, "En az 5 karakter girin.")
    .required("*Zorunlu alan"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Parola eşleşmedi!")
    .required("*Zorunlu alan"),
});

export default validations;
