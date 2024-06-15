import "./globals.css";
import { lato } from "@/fonts/fonts";

export const metadata = {
  title: "American Dream Cars",
  description: "A melhor experiência em carros clássicos importados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}
