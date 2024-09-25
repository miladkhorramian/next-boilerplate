import Providers from "@/components/providers";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import type { RootLayoutProps } from "@/types";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next Boilerplate",
  description: "Next.js app router with Shadcn, Tanstack Table, Tanstack Query",
};

export default function RootLayout(props: Readonly<RootLayoutProps>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="">
        <Providers>
          <>
            {props.children}
            <Toaster />
            <Sonner />
          </>
        </Providers>
      </body>
    </html>
  );
}
