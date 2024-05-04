import * as Yup from "yup";
import { IBankDetails } from "../types/signUp.model";

export const initialValues: IBankDetails = {
  bankAccountNumber: "",
  accountName: "",
};
export const validationSchema = Yup.object({
  // bankName: Yup.string().required("Bank Name is required"),
  bankAccountNumber: Yup.number(),
  accountName: Yup.string().required("Account name is required"),
});
