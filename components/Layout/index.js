import { Layout } from "antd";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

// TODO: setup with ant layout

const LayoutContainer = (props) => {
  return (
    <>
      <Layout style={layoutStyle}>
        <Header />
        <Content>{props.children}</Content>
        <Footer />
      </Layout>
      <style jsx global>{`
        body {
          font-family: "kaiti tc";
        }
      `}</style>
    </>
  );
};

const layoutStyle = {
  margin: "-8px",
};

export default LayoutContainer;
