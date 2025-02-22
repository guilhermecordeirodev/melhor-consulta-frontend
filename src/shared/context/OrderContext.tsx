import { createContext, useContext, useState } from "react";
import { IOrder, IOrderRequest } from "../../dtos/order";
import api from "../services/api/api";
import { useAuth } from "./AuthContext";

interface IOrderContext {
  order: IOrder;
  sendOrder: (order: IOrderRequest) => Promise<IOrder>;
  removeOrder: () => void;
}

const OrderContext = createContext<IOrderContext>({} as IOrderContext);

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }: any) {
  const { user } = useAuth();

  const [order, setOrder] = useState<IOrder>({} as IOrder);


  async function sendOrder (order: IOrderRequest): Promise<IOrder> {
    try {
      const response = await api.post('/generate-payment', order, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      });
      setOrder(response.data);
      return response.data;
    } catch (e) {
      console.log(e)
      throw new Error("Erro ao gerar pagamento!")
    }
  }

  const removeOrder = () => {
    setOrder({} as IOrder);
  }

  return <OrderContext.Provider value={{
    order,
    sendOrder,
    removeOrder
  }}>{children}</OrderContext.Provider>;
}