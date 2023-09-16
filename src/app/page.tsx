import Carousel from "@/components/HomePage/Carousel";
import About from "@/components/HomePage/About";
import { ConfigProvider } from "antd";
import Achivement from "@/components/HomePage/Achievement";
import Work from "@/components/HomePage/Work";
import Contact from "@/components/HomePage/Contact";

const HomePage = () => (
  <ConfigProvider>
    <Carousel />
    <About />
    <Achivement />
    <Work />
    <Contact />
  </ConfigProvider>
);

export default HomePage;
