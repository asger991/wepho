import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";

const LayoutContainer = (props) => {
  return (
    <Layout style={layoutStyle}>
      <Header />
      {props.children}
      <Footer />
    </Layout>
  );
};

const layoutStyle = {
  margin: "-8px",
};

export default LayoutContainer;
