// PackageCard.jsx
import { formatBRLCurrency } from '../../utils/formatBRLCurrency';
import { Body, Button, CardContainer, Header, Price, ProductName } from './styles';

interface IPackageCardProps {
  id: string;
  title: string;
  price: number;
  subtitle: string;
  productName: string;
  highlight: boolean;
  action: (id: string) => any
}

export function PackageCard({ id, title, price, subtitle, productName, highlight = false, action }: IPackageCardProps) {
  async function generateOrder() {
    action(id);
  }
  
  return (
    <CardContainer highlight={highlight}>
      <Header highlight={highlight}>
        <h3>{title}</h3>
      </Header>
      <Body highlight={highlight}>
        <ProductName>{productName}</ProductName>
        <Price highlight={highlight}>{formatBRLCurrency(price)}</Price>
        <p>{subtitle}</p>
      </Body>
      <Button highlight={highlight} onClick={generateOrder}>Comprar</Button>
    </CardContainer>
  );
}
