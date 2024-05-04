import * as Yup from "yup";

export type addNewProps = {
  dishCategory: string;
  dishName: string;
  description: string;
  price: string;
};
export const initialValues: addNewProps = {
  dishCategory: "",
  dishName: "",
  description: "",
  price: "",
};
export const validationSchema = Yup.object({
  dishCategory: Yup.string().required("Dish category is required"),
  dishName: Yup.string().required("Dish name is required"),
  price: Yup.string().required("Price is required"),
});
