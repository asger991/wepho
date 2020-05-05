import React, { useState } from "react";
import { Form, Row, Col, Input, Button } from "antd";

const InqueryForm = () => {
  const [form] = Form.useForm();

  return (
    <div style={containerStyle}>
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
      >
        <Row style={formStyle}>
          <Col span={6} offset={9}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Input something!",
                },
              ]}
              style={inputStyle}
              label={"Navn"}
              // noStyle={true}
            />
          </Col>
          <Col span={6} offset={9}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Input something!",
                },
              ]}
              style={inputStyle}
              label={"Telefonnummer"}
              // noStyle={true}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const containerStyle = {
  boxSizing: "border-box",
  backgroundColor: "#FCF7EF",
  height: "auto",
  width: "100%",
  display: "flex",
  boxShadow: "6px 6px 0px #CBC8C8",
  justifyContent: "center",
  marginTop: "2rem",
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
};

export default InqueryForm;
