import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight:["100","300","400","500","600","700"]
})

const poppins = Poppins({
  subsets: ["latin"],
  weight:["100","300","400","500","600","700"]
})

export const metadata: Metadata = {
  title: "saas",
  description: "saas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} ${inter.className} bg-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
