import { Product } from '../../../../dtos/product';
import { PackageCard } from '../../../../shared/components/PackageCard';
import { SectionContainer } from './styles';

interface IPackageSectionProps {
  products: Array<Product>;
}

export default function PackagesSection({ products }: IPackageSectionProps) {

  return (
    <>
      <SectionContainer id='pacotes'>
        <h2>Escolha seu pacote</h2>
        <div className="cards">
          {products.map(p => {
            return (
              <PackageCard
                id={p.id}
                productName={p.description}
                title={p.name}
                price={p.value}
                subtitle={`${p.quantityOfRequests} consulta${p.quantityOfRequests > 1 ? 's' : ''}`}
                highlight={p.quantityOfRequests === 10}
                action={(id: string) => console.log(id)}
              />
            )
          })}
        </div>
      </SectionContainer>
    </>
  );
}
