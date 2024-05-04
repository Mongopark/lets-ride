import * as Yup from "yup";

export type phoneProp = {
  phoneNumber: string;
};
export const initialValues: phoneProp = {
  phoneNumber: "",
};
export const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^\d{11}$/, "Invalid phone number")
    .required("Password is required"),
});
