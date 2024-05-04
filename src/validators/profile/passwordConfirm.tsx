import * as Yup from "yup";

export type passwordProp = {
  password: string;
};
export const initialValues: passwordProp = {
  password: "",
};
export const validationSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
});
