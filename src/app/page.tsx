import Carousel from "@/components/HomePage/Carousel";
import About from "@/components/HomePage/About";
import { ConfigProvider } from "antd";
import Achivement from "@/components/HomePage/Achievement";

const HomePage = () => (
  <ConfigProvider>
    <Carousel />
    <About />
    <Achivement />
  </ConfigProvider>
);

export default HomePage;
