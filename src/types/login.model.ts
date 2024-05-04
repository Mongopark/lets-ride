export interface LoginData {
  emailOrPhone: string;
  password: string;
  fcmToken?: string;
}

export interface LoginResponse {
  data: LoginResponseData;
  message: string;
  success: boolean;
}

export interface LoginResponseData {
  rider: RiderData;
  accessToken: string;
  refreshToken: string;
}

export interface RiderData {
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
  lat: null;
  lon: null;
  createdAt: string;
  updatedAt: string;
}
