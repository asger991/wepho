import React, { useState } from 'react'
import { Form, Row, Col, Input, Button, DatePicker, Select, Cascader, AutoComplete } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const SearchBox = () => {

    let boxStyle = {
        backgroundColor: '#F4EADE',
        height: '300px',
        width: '65%',
        display: 'flex',
        boxShadow: '6px 6px 0px #CBC8C8',
        justifyContent: 'center'
    }

    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();
  
    const { Option } = Select;
    const AutoCompleteOption = AutoComplete.Option
  
    const budgetRange = [
        {
            value: '0 - 5.000',
            label: '0 - 5.000,- '
        },
        {
            value: '5.000 - 10.000',
            label: '5.000 - 10.000,-'
        },
        {
            value: '10.000 - 15.000',
            label: '10.000 - 15.000,-'
        },
        {
            value: '15.000 - 20.000',
            label: '15.000 - 20.000,-'
        },
    ]
  
    const onFinish = values => {
      console.log('Received values of form: ', values);
    };

    return(
    <>
    <div style={boxStyle}>
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
    <h1 style={{textAlign: `center`}}>FIND DIN FOTOGRAF HER</h1>
      <Row gutter={24}>
      <Col span={10}>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <DatePicker placeholder="Bryllupsdato" style={{backgroundColor: `#FCF7EF`}}/>
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Cascader options={budgetRange} placeholder="Budget" style={{backgroundColor: `#FCF7EF`}}/>
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="Region" style={{backgroundColor: `#FCF7EF`}}/>
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="Halv dag/hel dag" style={{backgroundColor: `#FCF7EF`}}/>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            Søg
          </Button>
        </Col>
      </Row>
    </Form>
    </div>
    </>
);


}

export default SearchBox