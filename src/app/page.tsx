import Carousel from "@/components/HomePage/Carousel";
import Works from "@/components/HomePage/Works";
import { ConfigProvider } from "antd";

const HomePage = () => (
  <ConfigProvider>
    <Carousel />
    <Works />
  </ConfigProvider>
);

export default HomePage;
