"use client";
import NextFontProvider from "./next-font-provider";
import ReactQueryProvider from "./react-query-provider";
import ReduxToolkitProvider from "./redux-toolkit-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxToolkitProvider>
      <ReactQueryProvider>
        <NextFontProvider>
          <TooltipProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </TooltipProvider>
        </NextFontProvider>
      </ReactQueryProvider>
    </ReduxToolkitProvider>
  );
};

export default Providers;
