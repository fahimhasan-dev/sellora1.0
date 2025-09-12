import Banner from "@/components/common/Banner";
import Features from "@/components/common/Features";
import NewProducts from "@/components/products/NewProducts";
import ProductsCategories from "@/components/products/ProductsCategories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-15">
      <hero>
        <Banner></Banner>
      </hero>
      <main>
        <section>
          <Features></Features>
        </section>
        <section className="lg:mt-25">
          <ProductsCategories></ProductsCategories>
        </section>
        <section className="lg:mt-25">
          <NewProducts></NewProducts>
        </section>
      </main>
    </div>
  );
}
