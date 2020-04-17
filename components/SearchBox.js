import SearchForm1 from "./SearchForm1";
import SearchForm from "./SearchForm";
// import Form from "antd/lib/form/Form";
import { Row, Col } from "antd";

const SearchBox = () => {
  return (
    <>
      <Row style={containerStyle}>
        <Col span={16} offset={4} style={boxStyle}>
          <SearchForm />
        </Col>
      </Row>
    </>
  );
};

const boxStyle = {
  boxSizing: "border-box",
  backgroundColor: "#F4EADE",
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
