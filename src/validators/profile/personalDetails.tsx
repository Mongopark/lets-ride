import * as Yup from "yup";

export type loginProps = {
  fullName: string;
};
export const initialValues: loginProps = {
  fullName: "",
};
export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
});
