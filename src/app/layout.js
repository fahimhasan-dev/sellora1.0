import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SectionProvider from "@/Providers/SectionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Selora – Fresh Vegetables, Fruits & Spices Online",
  description:
    "Buy fresh vegetables, seasonal fruits, and essential spices online at Selora. Healthy, organic, and home-delivered groceries at your doorstep.",
  keywords: [
    "fresh vegetables",
    "fruits online",
    "organic spices",
    "healthy groceries",
    "home delivery",
    "Selora",
  ],
  authors: [{ name: "Selora Team" }],
  creator: "Fahim Hasan",
  publisher: "Selora",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Selora – Fresh Vegetables, Fruits & Spices Online",
    description:
      "Shop fresh vegetables, seasonal fruits, and essential spices online. Healthy and organic groceries delivered to your home.",
    url: "https://selora.com",
    siteName: "Selora",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Selora Fresh Vegetables, Fruits & Spices",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selora – Fresh Vegetables, Fruits & Spices Online",
    description:
      "Buy fresh vegetables, seasonal fruits, and essential spices online. Healthy and organic groceries delivered to your home.",
    images: ["/og-image.jpg"],
    creator: "@selora",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://selora.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <SectionProvider>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-[#6c80d813]`}
      >
        <nav>
          <Navbar></Navbar>
        </nav>
        <main>{children}</main>

        <footer>
          <Footer></Footer>
        </footer>
      </body></SectionProvider>
    </html>
  );
}
