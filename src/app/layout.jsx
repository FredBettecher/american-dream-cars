import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const lato = Lato({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900']

});

export const metadata = {
  title: "American Dream Cars",
  description: "A melhor experiência em carros clássicos importados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
