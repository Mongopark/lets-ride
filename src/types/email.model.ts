export interface SendEmailOtp {
  email: string;
  userType: string;
  otpType: string;
}

export interface EmailConfirmData {
  otp: string;
  userType: string;
  otpType: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

export interface VerifyEmailResponse {
  success: boolean;
  message: string;
  data: VerifyEmailData;
}

export interface VerifyEmailData {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  isEmailVerified: true;
  isPhoneVerified: false;
  status: string;
  passwordResetToken: string | null;
  refreshToken: string | null;
  userType: string;
  availability: string;
  profilePhoto: null;
  ninPhoto: null;
  fcmToken: null;
  isNinVerified: false;
  vehicleType: string;
  vehicleBrand: string;
  plateNumber: string;
  rating: 0;
  nin: string;
  lat: null;
  lon: null;
  createdAt: string;
  updatedAt: string;
}
