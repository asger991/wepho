import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  DatePicker,
  Select,
  Cascader,
  AutoComplete,
} from "antd";
import { CameraOutlined } from "@ant-design/icons";

const SearchForm = ({ heading, text }) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;

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

  const regionOptions = [
    {
      value: "hovedstaden",
      label: "Hovedstaden",
    },
    {
      value: "sjælland",
      label: "Sjælland",
    },
    {
      value: "syddanmark",
      label: "Syddanmark",
    },
    {
      value: "midtjylland",
      label: "Midtjylland",
    },
    {
      value: "nordjylland",
      label: "Nordjylland",
    },
  ];

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div style={containerStyle}>
      <div>
        {heading && (
          <h1 style={headlineStyle}>
            <CameraOutlined />
            {heading}
          </h1>
        )}
        {text && <p style={subtHeadingStyle}>{text}</p>}
      </div>
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={22} offset={1} style={formStyle}>
          <Col span={6}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Input something!",
                },
              ]}
              style={inputStyle}
              // noStyle={true}
            >
              <DatePicker
                placeholder="Bryllupsdato"
                bordered={false}
                style={{
                  backgroundColor: `#FCFFF7`,
                  width: `-webkit-fill-available`,
                }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Input something!",
                },
              ]}
              style={inputStyle}
            >
              <Cascader
                options={budgetRange}
                placeholder="Budget"
                bordered={false}
                size="large"
                style={{ backgroundColor: `#FCFFF7` }}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Input something!",
                },
              ]}
              style={inputStyle}
            >
              <Cascader
                options={regionOptions}
                placeholder="Region"
                bordered={false}
                size="large"
                style={{ backgroundColor: `#FCFFF7` }}
              />
            </Form.Item>
          </Col>
          <Col span={6} style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit" style={buttonStyle}>
              Søg
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  alignContent: "center",
  flexDirection: "column",
  // alignItems: "center",
  // change to padding
  width: "90%",
};

const headlineStyle = {
  fontFamily: "Kaiti TC",
  fontWeight: "100",
  fontSize: "40px",
  color: "#707070",
  margin: "1rem 0 0 11px",
};

const subtHeadingStyle = {
  fontFamily: "Kaiti TC",
  fontWeight: "100",
  fontSize: "20px",
  color: "#707070",
  margin: "1rem 0 0 11px",
};

const formStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const inputStyle = {
  backgroundColor: "#FCFFF7",
  color: "#707070",
  margin: "1rem 0.5rem",
  // textAlign: "center",
  lineHeight: "55px",
  fontSize: "25px !important",
  fontFamily: "Kaiti TC",
};

const buttonStyle = {
  width: "-webkit-fill-available",
  height: "-webkit-fill-available",
  backgroundColor: "#DADCD5",
  color: "#707070",
  margin: "1rem 1rem",
  textAlign: "center",
  lineHeight: "55px",
  fontSize: "30px",
  fontFamily: "Kaiti TC",
  border: "none",
  padding: "0",
};

export default SearchForm;
