import Link from "next/link";
import { Row, Col } from "antd";
import { InstagramOutlined } from "@ant-design/icons";

const Header = () => (
  <div style={headerStyle}>
    <Link href="/">
      <a style={linkStyle}>We∙pho</a>
    </Link>
    <div>
      {/* <Row>
        <Col span={12} offset={12}> */}
      <span style={subtitleStyle}>
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
  backgroundColor: "#FAF3E9",
  color: "#707070",
  width: "100%",
  height: "175px",
  display: "flex",
  alignItems: "center",
  justiftContent: "center",
  flexDirection: "column",
};

const linkStyle = {
  fontSize: 60,
  fontFamily: "Kaiti TC",
  textDecoration: "none",
  color: "#707070",
  marginTop: "45px",
};

const subtitleStyle = {
  fontFamily: "Hiragino Sans",
  fontSize: "14px",
  marginBottom: "30px",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "33rem",
};

const iconStyle = {
  fontSize: "30px",
  marginLeft: "30rem",
};

export default Header;
