import * as Yup from "yup";

export type addFoodItemProp = {
  foodItemName: string;
  price: string;
};
export const initialValues: addFoodItemProp = {
  foodItemName: "",
  price: "",
};
export const validationSchema = Yup.object().shape({
  foodItemName: Yup.string().required("Food item name is required"),
  price: Yup.string().required("Price is required"),
});
