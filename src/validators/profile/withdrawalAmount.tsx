import * as Yup from "yup";

export type amountProps = {
  amount: string;
};
export const initialValues: amountProps = {
  amount: "",
};
export const validationSchema = Yup.object().shape({
  amount: Yup.string().required("Amount is required"),
});
