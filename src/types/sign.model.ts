export interface SignupModel {
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
}

export interface SignUpResponseData {
  id: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  status: string;
  userType: string;
  isNinVerified: boolean;
  rating: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  availability: string;
  vehicleType: string;
  nin: string;
  lat: number;
  lon: number;
  vehicleBrand: string;
  plateNumber: string;
  updatedAt: string;
  createdAt: string;
  passwordResetToken: null;
  refreshToken: null;
  profilePhoto: null;
  ninPhoto: null;
  fcmToken: null;
  imageUploadToken: string;
}

export interface SignUpResponse {
  data: SignUpResponseData;
  message: string;
  success: boolean;
}

export interface PersonalDetailsProps {
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
  bankName: string;
  bankAccountNumber: string;
  accountName: string;
}

export interface SignUpUpdateModelData {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  passwordConfirm?: string;
  phoneNumber?: string;
  availability?: string;
  vehicleType?: string;
  nin?: string;
  lat?: number;
  lon?: number;
  vehicleBrand?: string;
  plateNumber?: string;
}

export interface SignUpUpdateModel {
  data: SignUpUpdateModelData;
  id: string;
}
