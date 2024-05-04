import * as Yup from "yup";

export type addCategoryProp = {
  categoryName: string;
  categoryIcon: string;
};
export const initialValues: addCategoryProp = {
  categoryName: "",
  categoryIcon: "",
};
export const validationSchema = Yup.object().shape({
  categoryName: Yup.string().required("Category name is required"),
});
