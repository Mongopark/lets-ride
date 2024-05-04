export interface IEditPassword {
  oldPassword: string;
  password: string;
  passwordConfirm: string;
}

export interface IEditPasswordResponse {
  success: boolean;
  message: string;
}

export interface IProfileEdit {
  firstName?: string;
  lastName?: string;
  availabalitity?: string;
  nin?: string;
  lat?: number;
  lon?: number;
  vehicleBrand?: string;
  plateNumber?: string;
  bankName?: string;
  BankAccountNumber?: string;
}

export interface IProfileResponse {
  success: boolean;
  data: IProfileResponseData;
  message: string;
}

export interface IProfileResponseData {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  status: string;
  passwordResetToken: null;
  refreshToken: string;
  userType: string;
  availability: string;
  profilePhoto: null;
  ninPhoto: null;
  fcmToken: null;
  isNinVerified: boolean;
  vehicleType: string;
  vehicleBrand: string;
  plateNumber: string;
  rating: number;
  nin: string;
  lat: number;
  lon: number;
  createdAt: string;
  updatedAt: string;
}
