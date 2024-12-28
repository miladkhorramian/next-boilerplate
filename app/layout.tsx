import Providers from "@/shared/providers";
import type { Metadata } from "next";
import { Toaster } from "@/shared/ui/toaster";
import { Toaster as Sonner } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next Boilerplate",
  description: "Next.js app router with Shadcn, Tanstack Table, Tanstack Query",
};

export default function RootLayout(
  props: Readonly<{ children: React.ReactNode }>
) {
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
