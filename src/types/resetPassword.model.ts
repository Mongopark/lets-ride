export interface ResetPasswordOtpRequest {
  token: string;
  password: string;
  passwordConfirm: string;
}

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

export interface ResetPasswordAuthRequest {
  oldPassword: string;
  password: string;
  passwordConfirm: string;
}

export interface ConfirmOtpPassReset {
  data: ConfirmOtpData;
  message: string;
  success: boolean;
}

export interface ConfirmOtpData {
  token: string;
}
