export interface IRefreshTokenResponse {
  success: true;
  data: IRefreshData;
  message: "New access token obtained successfully!";
}

export interface IRefreshData {
  accessToken: string;
}

export interface IRefreshTokenRequest {
  refreshToken: string;
}
