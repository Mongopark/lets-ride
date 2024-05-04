import * as Yup from "yup";

export type signupProps = {
  email: string;
};
export const initialValues: signupProps = {
  email: "",
};
export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
