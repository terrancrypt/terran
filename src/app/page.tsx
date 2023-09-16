import Carousel from "@/components/HomePage/Carousel";
import About from "@/components/HomePage/About";
import { ConfigProvider } from "antd";
import Achivement from "@/components/HomePage/Achievement";
import Work from "@/components/HomePage/Work";

const HomePage = () => (
  <ConfigProvider>
    <Carousel />
    <About />
    <Achivement />
    <Work />
  </ConfigProvider>
);

export default HomePage;
