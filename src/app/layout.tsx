import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Manucha craft",
  description: "Manucha craft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
