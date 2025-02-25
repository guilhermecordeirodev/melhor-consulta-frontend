import { createContext, useContext, useState } from "react";
import { FederalIdentificationDTO } from "../../dtos/cpf";
import { IOrder, IOrderRequest } from "../../dtos/order";
import api from "../services/api/api";
import { useAuth } from "./AuthContext";

interface IOrderContext {
  order: IOrder;
  sendOrder: (order: IOrderRequest, accessToken: string) => Promise<IOrder>;
  removeOrder: () => void;
  checkFederalIdentification: (orderId: string) => Promise<FederalIdentificationDTO>
}

const OrderContext = createContext<IOrderContext>({} as IOrderContext);

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }: any) {
  const { user } = useAuth();

  const [order, setOrder] = useState<IOrder>({} as IOrder);

  async function sendOrder(order: IOrderRequest, accessToken: string): Promise<IOrder> {
    try {
      const response = await api.post('/generate-payment', order, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
  
      setOrder(response.data);
      return response.data;
    } catch (e) {
      console.error("Erro ao gerar pagamento:", e);
      throw new Error("Erro ao gerar pagamento!");
    }
  }  
  
  const removeOrder = () => {
    setOrder({} as IOrder);
  }

  const checkFederalIdentification = async (orderId: string) => {
    try {
      const response = await api.get(`/search/${orderId}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      })
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  return <OrderContext.Provider value={{
    order,
    sendOrder,
    removeOrder,
    checkFederalIdentification
  }}>{children}</OrderContext.Provider>;
}