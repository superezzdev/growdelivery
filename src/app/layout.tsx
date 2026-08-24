import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Growdelivery | A delivery service for your needs",
  description: "A delivery service for your needs",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="w-full min-h-screen bg-linear-to-b from-green-100 to-white">{children}</body>
    </html>
  );
}
