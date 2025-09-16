import Banner from "@/components/common/Banner";
import Features from "@/components/common/Features";
import FeaturesCollection from "@/components/products/FeaturesCollection";
import NewProducts from "@/components/products/NewProducts";
import ProductsCategories from "@/components/products/ProductsCategories";
import RecentPosts from "@/components/products/RecentPosts";
import Testimonials from "@/components/products/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-15">
      <Banner></Banner>

      <main>
        <section>
          <Features></Features>
        </section>

        <section className="lg:mt-10">
          <ProductsCategories></ProductsCategories>
        </section>
        <section className="lg:mt-20">
          <NewProducts></NewProducts>
        </section>
        <section className="lg:mt-10">
          <FeaturesCollection></FeaturesCollection>
        </section>
        <section className="lg:mt-20">
          <Testimonials></Testimonials>
        </section>
        <section className="lg:mt-20">
          <RecentPosts></RecentPosts>
        </section>
      </main>
    </div>
  );
}
