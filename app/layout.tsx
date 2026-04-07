import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AmbientBackground } from "@/components/site/ambient-background";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = {
  title: "Jian Wang | Product Builder",
  description:
    "A premium portfolio site for product strategy, frontend systems, and developer-first experiences."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <AmbientBackground />
        <div className="relative min-h-screen">
          <SiteHeader />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
