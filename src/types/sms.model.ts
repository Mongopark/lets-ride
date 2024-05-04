export interface SendOtpData {
  phone: string;
  userType: string;
  otpType: string;
}

export interface SendOtpResponse {
  success: boolean;
  message: string;
}

export interface ConfirmOtpData {
  otp: string;
  userType: string;
  otpType: string;
}

export interface ConfirmOtpResponse {
  success: boolean;
  message: string;
}
