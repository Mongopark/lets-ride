export interface IWallet {
  id: string;
  balance: number;
  status: string;
  userId: string;
  userType: string;
  bankName: string;
  bankAccountNumber: string;
  accountName: string;
  CreatedAt: string;
  updatedAt: string;
  transactions: [];
}

export interface IWalletData {
  wallet: IWallet;
}

export interface IWalletResponse {
  success: boolean;
  data: IWalletData;
  message: string;
}
