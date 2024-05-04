import * as Yup from "yup";

export type ResetProps = {
  password: string;
  passwordConfirm: string;
};
export const initialValues: ResetProps = {
  password: "",
  passwordConfirm: "",
};
export const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least one letter, one number, and one special character"
    )
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
