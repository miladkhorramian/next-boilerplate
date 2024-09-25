import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ReactQueryProviderProps = { children: React.ReactNode };

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  //
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 12,
            refetchOnWindowFocus: false,
            refetchInterval: 0,
            retry: false,
          },
        },
      })
  );
  //
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
