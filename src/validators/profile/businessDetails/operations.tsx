import * as Yup from "yup";

export type operations = {
  minimumDeliveryFee: string;
  averagePrepTime: string;
  dayOfWeek: string;
  opensBy: string;
  closesBy: string;
};
export const initialValues: operations = {
  dayOfWeek: "",
  opensBy: "",
  closesBy: "",
  minimumDeliveryFee: "",
  averagePrepTime: "",
};
export const validationSchema = Yup.object({
  dayOfWeek: Yup.string().required("Days of the week is required"),
  opensBy: Yup.string().required("Opens by is required"),
  closesBy: Yup.string().required("Closes by is required"),
  minimumDeliveryFee: Yup.string().required("Minimum delivery is required"),
  averagePrepTime: Yup.string().required("Average prep time is required"),
});
