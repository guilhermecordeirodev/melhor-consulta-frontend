export interface IOrderRequest {
  productId: string;
  federalId?: string;
  userId: string;
}

export interface IOrder {
  id: string;
  paymentMethod: string;
  status: string;
  amount: number;
  qrCode: string;
  paidAt: Date;
  trasactionId: string;
  createdAt: Date;
  updatedAt: Date;
}