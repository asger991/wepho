const Footer = () => (
  <div style={footerStyle}>
    <div style={dividerStyle} />
    <div style={pictureContainer}>
      <div style={pictureBox}>
        <img src="/cake.png" width="300px" height="200px" />
        <div style={overlay}>KONTAKT</div>
      </div>
      <div style={pictureBox}>
        <img src="/kiss.png" width="300px" height="200px" />
        <div style={overlay}>OM OS</div>
      </div>
      <div style={pictureBox}>
        <img src="/flowers.png" width="300px" height="200px" />
        <div style={overlay}>FAQ</div>
      </div>
    </div>
  </div>
);

const footerStyle = {
  backgroundColor: "#FCF7EF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  boxSizing: "border-box",
};

const pictureContainer = {
  display: "flex",
  justifyContent: "space-around",
  margin: "0 0 2rem",
};

const pictureBox = {
  margin: "3rem 1rem",
  height: "200px",
  width: "300px",
  position: "relative",
};

const overlay = {
  color: "#fff",
  fontSize: "40px",
  lineHeight: "1.5",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  transform: "translate(-50%, -50%",
};

const dividerStyle = {
  borderBottom: "1px solid #707070",
  padding: "2rem 0",
  width: "60%",
};

export default Footer;
