import * as Yup from 'yup';

export type signupProps = {
    deliveryFee: string;
  preparationTime: string;
};
export const initialValues: signupProps = {
  deliveryFee: '',
  preparationTime: '',
};
export const validationSchema = Yup.object({
  deliveryFee: Yup.string().required('Delivery time is required'),
  preparationTime: Yup.string().required('Average preparation time is required'),
});
