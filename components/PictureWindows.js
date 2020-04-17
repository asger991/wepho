const PictureWindows = () => (
  <>
    <div style={infoTextStyle}>
      <p>Søg og sammenlign nemt priser på bryllupsfotografer</p>
    </div>
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
  justifyContent: "center",
  width: "80%",
};

const pictureBox = {
  height: "650px",
  width: "450px",
  margin: "0 4rem",
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
