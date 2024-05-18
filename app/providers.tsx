import { MuiProvider } from "@/libs/mui";
import { ReactQueryProvider } from "@/libs/tanstack-query";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MuiProvider>
      <AppRouterCacheProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </AppRouterCacheProvider>
    </MuiProvider>
  );
}
