import StyledComponentsRegistry from "../lib/AntdRegistry";

import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "./ThemeProvider";
import { ReduxToolkitProviders } from "@/redux-toolkit/ReduxToolkitProviders";
import Navbar from "@/components/Navbar/Navbar";
import { mainFont } from "./fonts";

export const metadata = {
  title: "terrancrypt",
  description: "Portfolio of Tuong Thai",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body
      className={
        "text-[#454545] bg-white dark:text-[#ffffff] dark:bg-[#1c1c1c] "
      }
    >
      <ReduxToolkitProviders>
        <Navbar />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className={`${mainFont.className}`}>
            <Header />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </div>
        </ThemeProvider>
      </ReduxToolkitProviders>
    </body>
  </html>
);

export default RootLayout;
