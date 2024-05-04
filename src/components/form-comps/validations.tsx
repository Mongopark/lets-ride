import * as Yup from "yup";
import { LoginData } from "../../types/login.model";

export const initialValues: LoginData = {
  emailOrPhone: "",
  password: "",
};
export const validationSchema = Yup.object().shape({
  emailOrPhone: Yup.string().required("Username/Phone is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least one letter, one number, and one special character"
    )
    .required("Password is required"),
});
