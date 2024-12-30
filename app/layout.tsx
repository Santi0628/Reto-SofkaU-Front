import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import Nav from "./components/Nav";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Box, Container } from "@mui/material";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body style={{height: '100vh'}}>
          <AppRouterCacheProvider>
            <Box sx={{height: '100%'}}>

              <Nav />
              <Box
                sx={{
                  padding: '10px',
                  height: '100%',
                }}
                >
                {  children }
              </Box>
            </Box>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
