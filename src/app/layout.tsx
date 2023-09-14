import StyledComponentsRegistry from "../lib/AntdRegistry";

import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "./theme-provider";
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
        "container mx-auto text-[#454545] bg-white dark:text-[#ffffff] dark:bg-[#1c1c1c] xl:px-0 lg:px-2 md:px-4 px-6"
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
