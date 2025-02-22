export interface User {
  accessToken: string;
  user: {
    id: string;
    googleSub: string;
    email: string;
    name: string;
    picture: string;
    quantityOfSearch: number;
    createdAt: string | null;
    updatedAt: string | null;
  };
}