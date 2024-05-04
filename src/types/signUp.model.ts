export interface ISignUp {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: string;
  availability: string;
  vehicleType: string;
  nin: string;
  lat: number;
  lon: number;
  vehicleBrand: string;
  plateNumber: string;
  // bankName: string;
  // bankAccountNumber: string;
  // accountName: string;
}

export interface IPersonalDetails {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: string;
}

export interface IRidingDetails {
  availability: string;
}

export interface IVerificationDetails {
  vehicleType: string;
  nin: string;
  vehicleBrand: string;
  plateNumber: string;
}

export interface IBankDetails {
  bankName?: string;
  bankAccountNumber: string;
  accountName: string;
}
