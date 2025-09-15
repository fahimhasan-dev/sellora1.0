// components/NewProducts.tsx

import { Fade } from "react-awesome-reveal";
import ProductCard from "./ProductCard";

export default function NewProducts() {
  return (
    <section className="pb-10 max-w-[90%] mx-auto ">
      <div className="text-center mb-8">
        <p className="text-[#6c7fd8] font-medium">Trending item</p>
        <h2 className="text-3xl font-bold">New products</h2>
      </div>
      {/* <Fade direction="up" triggerOnce> */}
        <ProductCard></ProductCard>
      {/* </Fade> */}
    </section>
  );
}
