import SearchForm1 from "./SearchForm1";
import SearchForm from "./SearchForm";
// import Form from "antd/lib/form/Form";
import { Row, Col } from "antd";

const SearchBox = () => {
  return (
    <>
      <div style={containerStyle}>
        <div style={boxStyle}>
          <SearchForm />
        </div>
      </div>
    </>
  );
};

const boxStyle = {
  boxSizing: "border-box",
  backgroundColor: "#FCF7EF",
  height: "auto",
  width: "auto",
  display: "flex",
  boxShadow: "6px 6px 0px #CBC8C8",
  justifyContent: "center",
  marginTop: "6rem",
};

const containerStyle = {
  width: "100%",
};

export default SearchBox;
