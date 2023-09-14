import Carousel from "@/components/HomePage/Carousel";
import { ConfigProvider } from "antd";

const HomePage = () => (
  <ConfigProvider>
    <Carousel />
  </ConfigProvider>
);

export default HomePage;
