// export interface IUser {
//   id: string;
//   isEmailVerified: boolean;
//   isPhoneVerified: boolean;
//   status: string;
//   userType: string;
//   isNinVerified: boolean;
//   rating: number;
//   email: string;
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   availability: string;
//   vehicleType: string;
//   nin: string;
//   lat: number;
//   lon: number;
//   vehicleBrand: string;
//   plateNumber: string;
//   updatedAt: string;
//   createdAt: string;
//   passwordResetToken: null;
//   refreshToken: null;
//   profilePhoto: null;
//   ninPhoto: null;
//   fcmToken: null;
//   imageUploadToken: string;
// }

export interface IRider {
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
  profilePhoto: null | string;
  ninPhoto: null;
  fcmToken: null;
  isNinVerified: false;
  vehicleType: string;
  vehicleBrand: string;
  plateNumber: string;
  rating: number;
  nin: string;
  lat: null;
  lon: null;
  createdAt: string;
  updatedAt: string;
  accessToken: string | null;
}

// export interface IUserResponse {
//   accessToken: string;
//   refreshToken: string;
//   data: IUser;
// }

export interface IRiderData {
  rider: IRider;
  accessToken: string;
  refreshToken: string;
}

export interface IUserResponse {
  message: string;
  successs: boolean;
  data: IRiderData;
}

export interface IRiderResponse {
  message: string;
  successs: boolean;
  data: IRider;
}
