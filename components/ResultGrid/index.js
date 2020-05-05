import { Row, Col, Card, Avatar } from "antd";
import {
  DollarCircleOutlined,
  InfoCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const ResultGrid = () => {
  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {/* TODO: export card to own component */}
        {/* TODO: expand height of box on scroll  */}
        <Card
          style={{
            width: 500,
            margin: `2rem 2rem`,
          }}
          title="Company Name"
          bordered={false}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <DollarCircleOutlined key="setting" />,
            <InfoCircleOutlined key="edit" />,
            <EnvironmentOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Photographer Name"
            description="This is the description"
          />
        </Card>
        <Card
          style={{
            width: 500,
            margin: `2rem 2rem`,
          }}
          title="Company Name"
          bordered={false}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <DollarCircleOutlined key="setting" />,
            <InfoCircleOutlined key="edit" />,
            <EnvironmentOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Photographer Name"
            description="This is the description"
          />
        </Card>
        <Card
          style={{
            width: 500,
            margin: `2rem 2rem`,
          }}
          title="Company Name"
          bordered={false}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <DollarCircleOutlined key="setting" />,
            <InfoCircleOutlined key="edit" />,
            <EnvironmentOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Photographer Name"
            description="This is the description"
          />
        </Card>
        <Card
          style={{
            width: 500,
            margin: `2rem 2rem`,
          }}
          title="Company Name"
          bordered={false}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <DollarCircleOutlined key="setting" />,
            <InfoCircleOutlined key="edit" />,
            <EnvironmentOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Photographer Name"
            description="This is the description"
          />
        </Card>
      </div>
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

const gridStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

export default ResultGrid;
