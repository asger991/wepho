import SearchForm from "./SearchForm";
import Form from "antd/lib/form/Form";

const SearchBox = () => {
  let boxStyle = {
    boxSizing: "border-box",
    backgroundColor: "#F4EADE",
    height: "450px",
    width: "65%",
    display: "flex",
    boxShadow: "6px 6px 0px #CBC8C8",
    justifyContent: "center",
    marginTop: "6rem",
  };

  return (
    <>
      <div style={boxStyle}>
        <SearchForm />
      </div>
    </>
  );
};

export default SearchBox;
