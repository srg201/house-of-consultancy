import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Footer } from "@/widgets/footer";
import { Navbar } from "@/widgets/navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import * as React from "react";
// import Cursor from 'react-cursor-follower';
// import ScrollArea from 'react-scrollbar';
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "House of consultancy",
  description: "House of consultancy - your insurance partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(`${poppins.variable} antialiased`)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextTopLoader />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
          {/* <CustomMouse /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
