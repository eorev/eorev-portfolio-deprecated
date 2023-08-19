import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Loading from "./loading";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ethan's Portfolio",
  description: "Portfolio about who Ethan is.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className={inter.className}>{children}</body>
      </Suspense>
    </html>
  );
}
