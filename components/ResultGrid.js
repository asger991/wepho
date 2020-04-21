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
      <div style={boxStyle}>
        <div style={gridStyle}>
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
    </div>
  );
};

const containerStyle = {
  width: "100%",
};

const boxStyle = {
  boxSizing: "border-box",
  backgroundColor: "#FCF7EF",
  height: "auto",
  width: "auto",
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
