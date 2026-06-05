import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Astral Sunglasses — A beleza do seu mundo nas nossas lentes",
  description:
    "Óculos de sol premium 100% Buziana. Estilo, liberdade e autenticidade criados em Búzios para o mundo.",
  keywords: ["óculos de sol", "astral", "búzios", "sunglasses", "premium", "polarizado"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
