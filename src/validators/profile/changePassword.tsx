import * as Yup from "yup";
import { IEditPassword } from "../../types/profile.model";

export const initialValues: IEditPassword = {
  oldPassword: "",
  password: "",
  passwordConfirm: "",
};

export const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Password number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least one letter, one number, and one special character"
    )
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least one letter, one number, and one special character"
    )
    .required("Password is required"),
});
