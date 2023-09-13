import StyledComponentsRegistry from "../lib/AntdRegistry";

import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "./theme-provider";
import { mPlus1p } from "./fonts";

export const metadata = {
  title: "terrancrypt",
  description: "Portfolio of Tuong Thai",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={mPlus1p.className && "container mx-auto"}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
