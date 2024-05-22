import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Home do site",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
