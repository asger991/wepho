import SearchForm from "./SearchForm";

const SearchBox = (heading, text) => {
  return (
    <>
      <div style={containerStyle}>
        <div style={boxStyle}>
          <SearchForm heading={heading} text={text} />
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
