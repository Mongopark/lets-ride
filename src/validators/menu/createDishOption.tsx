import * as Yup from "yup";

export type createDishOptionProp = {
  optionName: string;
  leastOption: string;
  mostOption: string;
};
export const initialValues: createDishOptionProp = {
  optionName: "",
  leastOption: "",
  mostOption: "",
};
export const validationSchema = Yup.object().shape({
  optionName: Yup.string().required("Option name is required"),
  leastOption: Yup.string().required("Least selected option is required"),
  mostOption: Yup.string().required("Most selected option is required"),
});
