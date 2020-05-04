const Page = (props) => <div style={pageStyle}>{props.children}</div>;

const pageStyle = {
  backgroundColor: "#FCFFF7",
  padding: "3rem 10rem",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "180px",
};

export default Page;
