import Banner from "@/components/common/Banner";
import Features from "@/components/common/Features";
import NewProducts from "@/components/products/NewProducts";
import ProductsCategories from "@/components/products/ProductsCategories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-15">
      <Banner></Banner>

      <main>
        <section>
          <Features></Features>
        </section>
        
        <section className="lg:mt-36">
          <ProductsCategories></ProductsCategories>
        </section>
        <section className="lg:mt-44">
          <NewProducts></NewProducts>
        </section>
      </main>
    </div>
  );
}
