import Banner from "@/components/common/Banner";
import Features from "@/components/common/Features";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-15">
      <hero>
        <Banner></Banner>
      </hero>
      <main>
        <Features></Features>
      </main>
    </div>
  );
}
