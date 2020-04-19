import { Row, Col } from "antd";

const PictureWindows = () => (
  <>
    <div style={infoTextStyle}>
      <p>Søg og sammenlign nemt priser på bryllupsfotografer</p>
    </div>

    {/* <Row style={gridStyle}>
      <Col span={8} style={pictureBox}>
        <img src="/table.png" width="350px" height="550px" />
        <div style={overlay}>
          VI HAR <br /> GJORT DET NEMT
        </div>
      </Col>
      <Col span={8} style={pictureBox}>
        <img src="/walk.png" width="350px" height="550px" style={imageStyle} />
        <div style={overlay}>BOOKING</div>
      </Col>
      <Col span={8} style={pictureBox}>
        <img src="/weil.png" width="350px" height="550px" />
        <div style={overlay}>
          WE∙PHO'S <br /> FAVORITTER
        </div>
      </Col>
    </Row> */}
    <div style={gridStyle}>
      <div style={pictureBox}>
        <img src="/table.png" width="350px" height="550px" />
        <div style={overlay}>
          VI HAR <br /> GJORT DET NEMT
        </div>
      </div>
      <div style={pictureBox}>
        <img src="/walk.png" width="350px" height="550px" style={imageStyle} />
        <div style={overlay}>BOOKING</div>
      </div>
      <div style={pictureBox}>
        <img src="/weil.png" width="350px" height="550px" />
        <div style={overlay}>WE∙PHO'S FAVORITTER</div>
      </div>
    </div>
  </>
);

const infoTextStyle = {
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "10rem",
  marginLeft: "auto",
  fontFamily: "kaiti TC",
  fontSize: "large",
};

const gridStyle = {
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
};

const pictureBox = {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  fontFamily: "Kaiti TC",
};

const imageStyle = {
  // backgroundColor: "grey",
  // opacity: "0.7",
};

const overlay = {
  // backgroundColor: "black",
  // opacity: "0.3",
  color: "#fff",
  fontSize: "35px",
  lineHeight: "1.5",
  textAlign: "center",
  position: "absolute",
  top: "70%",
  left: "50%",
  width: "100%",
  transform: "translate(-50%, -50%",
};

export default PictureWindows;
