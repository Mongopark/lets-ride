import * as Yup from "yup";

export type verificationDetails = {
  vehicleType: string;
  vehicleBrand: string;
  // phoneNumber: string;
  nin: string;
};
export const initialValues: verificationDetails = {
  vehicleType: "",
  vehicleBrand: "",
  // phoneNumber: "",
  nin: "",
};
export const validationSchema = Yup.object().shape({
  vehicleType: Yup.string().required("Vehicle Type is required"),
  vehicleBrand: Yup.string().required("Vehicle brand is required"),
  // phoneNumber: Yup.string().required("Phone number is required"),
  nin: Yup.string().required("NIN is required"),
});
