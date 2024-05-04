import * as Yup from "yup";

export type signupProps = {
  // dayOfWeek: string;
  opensBy: string;
  closesBy: string;
};
export const initialValues: signupProps = {
  // dayOfWeek: '',
  opensBy: "",
  closesBy: "",
};
export const validationSchema = Yup.object({
  // dayOfWeek: Yup.string().required('Days of the week is required'),
  opensBy: Yup.string().required("Opens by is required"),
  closesBy: Yup.string().required("Closes by is required"),
});
