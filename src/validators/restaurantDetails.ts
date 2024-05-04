import * as Yup from 'yup';

export type signupProps = {
  restaurantName: string;
  email: string;
  phoneNumber: string;
  address: string;
};
export const initialValues: signupProps = {
  restaurantName: '',
  email: '',
  phoneNumber: '',
  address: ''
};
export const validationSchema = Yup.object({
  restaurantName: Yup.string().required('Restaurant name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^\d{11}$/, 'Invalid phone number')
    .required('Phone number is required'),
  address: Yup.string()
    .required('Address is required'),
});
