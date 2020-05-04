import { Button } from "antd";

const Package = () => {
  return (
    <div style={packageStyle}>
      <p style={packageNameStyle}>Navn på pakke</p>
      <span>
        <b>Normalpris:</b> xx.xxx,-
      </span>
      <span>
        <b>Jeres pris:</b> xx.xxx,-
      </span>
      <span style={{ flexGrow: `1` }}>
        <b>Indeholder:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident.
      </span>
      <Button type="primary" htmlType="submit" style={buttonStyle}>
        Send forespørgelse
      </Button>
    </div>
  );
};

const packageStyle = {
  fontFamily: "Kaiti TC",
  textAlign: "left",
  color: "#707070",
  display: "flex",
  flexDirection: "column",
};

const packageNameStyle = {
  textDecoration: "underline",
  fontSize: "20px",
};

const buttonStyle = {
  width: "-webkit-fill-available",
  height: "auto",
  backgroundColor: "#B4B4B4",
  border: "1px solid #707070",
  borderRadius: "0",
  color: "#707070",
  margin: "0.5rem 0",
  textAlign: "center",
  fontSize: "20px",
  fontFamily: "Kaiti TC",
  border: "none",
  padding: "5px",
  alignSelf: "end",
};

export default Package;
