// import React, { useState } from "react";
// import {
//   Form,
//   Row,
//   Col,
//   Input,
//   Button,
//   DatePicker,
//   Select,
//   Cascader,
//   AutoComplete,
// } from "antd";

const SearchForm1 = () => {
  // const [expand, setExpand] = useState(false);
  // const [form] = Form.useForm();

  // const { Option } = Select;
  // const AutoCompleteOption = AutoComplete.Option;

  const budgetRange = [
    {
      value: "0 - 5.000",
      label: "0 - 5.000,- ",
    },
    {
      value: "5.000 - 10.000",
      label: "5.000 - 10.000,-",
    },
    {
      value: "10.000 - 15.000",
      label: "10.000 - 15.000,-",
    },
    {
      value: "15.000 - 20.000",
      label: "15.000 - 20.000,-",
    },
  ];

  // const onFinish = (values) => {
  //   console.log("Received values of form: ", values);
  // };

  const boxStyle = {
    boxSizing: "border-box",
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
  };

  const headlineStyle = {
    fontFamily: "Kaiti TC",
    fontWeight: "100",
    fontSize: "40px",
    color: "#707070",
    marginTop: "2rem",
  };

  const formStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  };

  const inputStyle = {
    width: "45%",
    backgroundColor: "#FCF7EF",
    color: "#707070",
    margin: "1rem 1rem",
    textAlign: "center",
    lineHeight: "55px",
    fontSize: "25px",
    fontFamily: "Kaiti TC",
  };

  const buttonStyle = {
    width: "35%",
    backgroundColor: "#DADCD5",
    color: "#707070",
    margin: "1rem 1rem",
    textAlign: "center",
    lineHeight: "55px",
    fontSize: "30px",
    fontFamily: "Kaiti TC",
  };

  return (
    <div style={boxStyle}>
      <div>
        <h1 style={headlineStyle}>FIND DIN FOTOGRAF HER</h1>
      </div>
      <div>
        <form style={formStyle}>
          <input style={inputStyle} type="text" placeholder="Budget" />
          <input style={inputStyle} type="text" placeholder="Region" />
          <input
            style={inputStyle}
            type="text"
            placeholder="Halv dag/hel dag"
          />
          <input style={inputStyle} type="text" placeholder="Bryllupsdato" />
          <input style={buttonStyle} type="submit" value="Søg" />
        </form>
      </div>
    </div>
  );
};

export default SearchForm1;
