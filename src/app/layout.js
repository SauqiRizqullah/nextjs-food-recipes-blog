import { Geist, Geist_Mono } from "next/font/google";
import { Bebas_Neue, Roboto, Poppins, Vampiro_One} from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
  variable: "--font-roboto"
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const vampiro = Vampiro_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vampiro",
});

const consulSans = localFont({
  src: '../../public/fonts/Consul.woff2',
  variable: '--font-consul-sans'
})

const dramaRegular = localFont({
  src: '../../public/fonts/Drama-Regular.woff2',
  variable: '--font-drama-regular'
})

const bitter = localFont({
  src: '../../public/fonts/Bitter.woff2',
  variable: '--font-bitter',
});

const arvo = localFont({
  src: '../../public/fonts/Arvo.woff2',
  variable: '--font-arvo',
});

const domaineDisplay = localFont({
  src: '../../public/fonts/Domaine-Display.woff2',
  variable: '--font-domaine-display',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${bebasNeue.variable} ${poppins.variable} ${vampiro.variable} ${consulSans.variable} ${dramaRegular.variable} ${domaineDisplay.variable} ${bitter.variable} ${arvo.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
