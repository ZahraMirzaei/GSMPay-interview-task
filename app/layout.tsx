import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "TODO App",
  description: "todo list app - Interview task for GSMPay.co",
};

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fa'>
      <body className={vazirmatn.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
