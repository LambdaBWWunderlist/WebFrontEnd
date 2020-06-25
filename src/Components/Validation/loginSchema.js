import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, "Username is required")
    .required("Username is required"),
  email: Yup.string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

export default loginSchema;
