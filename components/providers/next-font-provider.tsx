import React from "react";
import { IRANSansX } from "@/theme/fonts";

type NextFontProviderProps = { children: React.ReactNode };

const NextFontProvider = ({ children }: NextFontProviderProps) => {
  return (
    <div className={`${IRANSansX.variable} font-iran-sans-x`}>
      <style jsx global>{`
        html {
          font-family: ${IRANSansX.style.fontFamily};
        }
      `}</style>
      {children}
    </div>
  );
};

export default NextFontProvider;
