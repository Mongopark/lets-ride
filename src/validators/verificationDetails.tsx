import * as Yup from "yup";

export interface VerificationProps {
  vehicleBrand: string;
  plateNumber: string;
  nin: string;
}
export const initialValues: VerificationProps = {
  vehicleBrand: "",
  plateNumber: "",
  nin: "",
};

export const validationSchema = Yup.object({
  vehicleBrand: Yup.string().required("Vehicle brand is required"),
  nin: Yup.string()
    .matches(/^\d{11}$/, "Invalid NIN number")
    .required("NIN is required"),
  plateNumber: Yup.string()
    .max(8, "Plate number cannot be less or more than 8 characters")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,
      "Platenumber must contain at least one letter and one number"
    )
    .required("Password is required"),
});
