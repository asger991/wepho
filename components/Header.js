import Link from "next/link";
import { Row, Col } from "antd";
import { InstagramOutlined, UserOutlined } from "@ant-design/icons";

const Header = () => (
  <div style={headerStyle}>
    <div style={linkContainerStyle}>
      <Link href="/">
        <a style={subLinkStyle}>Sign up</a>
      </Link>
      <Link href="/">
        <a style={linkStyle}>We∙pho</a>
      </Link>
      <Link href="/">
        <a style={subLinkStyle}>Sign in</a>
      </Link>
    </div>
    <div>
      {/* <Row>
        <Col span={12} offset={12}> */}
      <span style={subtitleStyle}>
        <span>
          <UserOutlined style={{ fontSize: `30px`, left: `auto` }} />
        </span>
        Bryllupsfoto & Booking
        <span>
          <InstagramOutlined style={iconStyle} />
        </span>
      </span>
      {/* </Col>
      </Row> */}
    </div>
  </div>
);

const headerStyle = {
  // backgroundColor: "#FAF3E9",
  backgroundColor: "#FCF7EF",
  // backgroundColor: "#FFFDF7",
  color: "#707070",
  // color: "#373F51",
  width: "100%",
  height: "175px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
};

const linkContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const linkStyle = {
  fontSize: 60,
  fontFamily: "Kaiti TC",
  textDecoration: "none",
  // color: "#707070",
  color: "#373F51",
  margin: "45px 8rem 0 8rem",
};

const subLinkStyle = {
  fontSize: 20,
  fontFamily: "Kaiti TC",
  textDecoration: "none",
  // color: "#707070",
  color: "#373F51",
  marginTop: "45px",
};

const subtitleStyle = {
  fontFamily: "Hiragino Sans",
  fontSize: "14px",
  marginBottom: "30px",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "33rem",
  color: "#373F51",
};

const iconStyle = {
  fontSize: "30px",
  marginLeft: "30rem",
};

export default Header;
