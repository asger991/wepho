const Content = (props) => {
  return <div style={containerStyle}>{props.children}</div>;
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

export default Content;
