import React from "react";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "../lib/AntdRegistry";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "terrancrypt",
  description: "Portfolio of Tuong Thai",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
