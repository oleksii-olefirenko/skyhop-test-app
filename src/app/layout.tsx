import StyledComponentsRegistry from "@/styled/registry";
import { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "SkyHop test app",
  description: "Welcome to Next.js",
};
