import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-950/90 h-full">
        <Header />
        <main className="relative container mx-auto">{children}</main>
      </body>
    </html>
  );
}
