import { useEffect, useState } from 'react';
import { Product } from '../../dtos/product';
import Footer from '../../shared/components/Footer';
import Header from '../../shared/components/Header';
import LoadingBackdrop from '../../shared/components/LoadingBackdrop';
import api from '../../shared/services/api/api';
import AdvantagesSection from './components/AdvantagesSection';
import ContactSection from './components/ContactSection';
import FeaturesSection from './components/FeaturesSection';
import HeroSection from './components/HeroSection';
import PackagesSection from './components/PackagesSection';
import StepsSectionComponent from './components/StepsSection';


export default function Home() {
    const [products, setProducts] = useState<Array<Product>>([] as Array<Product>);
    const [loading, setLoading] = useState<boolean>(false);

    async function getProducts() {
    setLoading(true);
    try {
      const response = await api.get("/public/products");
      setProducts(response.data);
    } catch(e: any) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <LoadingBackdrop open={loading} />
      <Header />
      <HeroSection products={products} />
      <PackagesSection products={products} />
      <AdvantagesSection />
      <FeaturesSection />
      <StepsSectionComponent />
      <ContactSection />
      <Footer />
    </>
  );
}
