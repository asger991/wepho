import Link from "next/link";
import { Row, Col } from "antd";
import { InstagramOutlined, UserOutlined } from "@ant-design/icons";

const Header = () => (
  <div style={headerStyle}>
    <Row>
      <Col span={24} style={linkContainerStyle}>
        <Link href="/">
          <a style={linkStyle}>We∙pho</a>
        </Link>
      </Col>
    </Row>
    <Row style={{ padding: `0 12rem`, width: `100%` }}>
      <Col span={24} style={subtitleStyle}>
        <UserOutlined style={iconStyle} />
        <span>Bryllupsfoto & Booking</span>
        <InstagramOutlined style={iconStyle} />
      </Col>
    </Row>
  </div>
);

const headerStyle = {
  backgroundColor: "#FCF7EF",
  color: "#707070",
  width: "100%",
  height: "175px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  position: "fixed",
  top: "0px",
  zIndex: "2",
};

const linkContainerStyle = {
  margin: "3rem 0 0 0",
};

const linkStyle = {
  fontSize: 60,
  fontFamily: "Kaiti TC",
  textDecoration: "none",
  color: "#373F51",
};

const subtitleStyle = {
  fontFamily: "Hiragino Sans",
  fontSize: "14px",
  marginBottom: "30px",
  display: "flex",
  justifyContent: "space-between",
  color: "#373F51",
};

const iconStyle = {
  fontSize: "30px",
};

export default Header;

// <div style={headerStyle}>
//   <div style={linkContainerStyle}>
//     <Link href="/">
//       <a style={linkStyle}>We∙pho</a>
//     </Link>
//   </div>
//   <div>
//     {/* <Row>
//       <Col span={12} offset={12}> */}
//     <span style={subtitleStyle}>
//       <span>
//         <UserOutlined style={{ fontSize: `30px`, left: `auto` }} />
//       </span>
//       Bryllupsfoto & Booking
//       <span>
//         <InstagramOutlined style={iconStyle} />
//       </span>
//     </span>
//     {/* </Col>
//     </Row> */}
//   </div>
// </div>
