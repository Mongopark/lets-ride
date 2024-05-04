export interface IMediaResponse {
  success: boolean;
  message: string;
  data: IMediaData;
}

export interface IMediaData {
  file: string;
}
