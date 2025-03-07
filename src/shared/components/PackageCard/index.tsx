import { formatBRLCurrency } from "../../utils/formatBRLCurrency";
import {
  Body,
  Button,
  CardContainer,
  Header,
  Price,
  ProductName,
  Subtitle,
} from "./styles";

interface IPackageCardProps {
  id: string;
  title: string;
  price: number;
  subtitle: string;
  productName: string;
  highlight: boolean;
  action: (id: string) => void;
}

export function PackageCard({
  id,
  title,
  price,
  subtitle,
  productName,
  highlight = false,
  action,
}: IPackageCardProps) {
  function handleClick() {
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
        <Subtitle>{subtitle}</Subtitle>
      </Body>
      <Button highlight={highlight} onClick={handleClick}>
        Comprar
      </Button>
    </CardContainer>
  );
}
