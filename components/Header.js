import Link from "next/link";

const Header = () => (
  <div style={headerStyle}>
    <Link href="/">
      <a style={linkStyle}>We∙pho</a>
    </Link>
    <span style={subtitleStyle}>Bryllupsfoto & Booking</span>
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
};

export default Header;
