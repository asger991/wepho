const PictureWindows = () => (
  <>
    <div style={infoTextStyle}>
      <p>Søg og sammenlign nemt priser på bryllupsfotografer</p>
    </div>
    <div style={gridStyle}>
      <div style={pictureBox}>
        <img src="/table.png" width="450px" height="650px" />
        <div style={overlay}>
          VI HAR <br /> GJORT DET NEMT
        </div>
      </div>
      <div style={pictureBox}>
        <img src="/walk.png" width="450px" height="650px" style={imageStyle} />
        <div style={overlay}>BOOKING</div>
      </div>
      <div style={pictureBox}>
        <img src="/weil.png" width="450px" height="650px" />
        <div style={overlay}>WEPHO'S FAVORITTER</div>
      </div>
    </div>
  </>
);

const infoTextStyle = {
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "20rem",
  marginLeft: "auto",
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
  boxShadow: "6px 6px 0px #CBC8C8",
};

const imageStyle = {
  // backgroundColor: "grey",
  // opacity: "0.7",
};

const overlay = {
  // backgroundColor: "grey",
  // opacity: "0.7",
  color: "#fff",
  fontSize: "45px",
  lineHeight: "1.5",
  textAlign: "center",
  position: "absolute",
  top: "80%",
  left: "50%",
  width: "100%",
  transform: "translate(-50%, -50%",
};

export default PictureWindows;
