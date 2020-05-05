import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";

// TODO: setup with ant layout

const LayoutContainer = (props) => {
  return (
    <Layout style={layoutStyle}>
      <Header />
      <div style={containerStyle}>{props.children}</div>
      <Footer />
    </Layout>
  );
};

const layoutStyle = {
  margin: "-8px",
};

const containerStyle = {
  backgroundColor: "#FCFFF7",
  padding: "3rem 10rem",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "180px",
};

export default LayoutContainer;
