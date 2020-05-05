import { LeftOutlined } from "@ant-design/icons";
import Package from "./Package";
import UserBio from "./UserBio";
import Gallery from "./Gallery";

const Profile = () => {
  return (
    <div style={containerStyle}>
      <div style={gridContainer}>
        <div style={companyName}>
          <div style={areaStyle}>
            <h1 style={h1Style}>Fotografens oplysninger</h1>
            <LeftOutlined style={{ alignSelf: `center`, fontSize: `20px` }} />
          </div>
        </div>
        <div style={packages}>
          <div style={areaStyle}>
            <h1 style={h1Style}>Pakker</h1>
          </div>
        </div>
        <div style={package1}>
          <div style={areaStyle}>
            <Package />
          </div>
        </div>
        <div style={package2}>
          <div style={areaStyle}>
            <Package />
          </div>
        </div>
        <div style={pictures}>
          <div style={areaStyle}>{/* <Gallery /> */}</div>
        </div>
        <div style={bio}>
          <div style={areaStyle}>
            <UserBio />
          </div>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  backgroundColor: "#FCF7EF",
  height: "100vh",
  width: "100%",
  display: "flex",
  boxShadow: "6px 6px 0px #CBC8C8",
  justifyContent: "center",
  marginTop: "2rem",
  padding: "2rem",
};

const gridContainer = {
  color: "#707070",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 0.5fr 0.5fr",
  // TODO: check height of 60px section in order to make drown down
  gridTemplateRows: "60px 1fr 1fr 1fr 1fr 0.5fr",
  gap: "4% 4%",
  gridTemplateAreas: `"companyName companyName packages" "pictures pictures package1" "pictures pictures package1" "pictures pictures package2" "bio bio package2" "bio bio ."`,
};

const areaStyle = {
  backgroundColor: "rgb(252, 255, 247)",
  alignSelf: "start",
  display: "flex",
  justifyContent: "space-between",
  height: "100%",
  width: "100%",
  boxShadow: `3px 3px 0px #CBC8C8`,
  padding: "1em",
  overflow: "scroll",
};

const h1Style = {
  margin: "0",
  color: "#707070",
  fontSize: "23px",
};

const companyName = { gridArea: "companyName" };

const package1 = { gridArea: "package1" };

const package2 = { gridArea: "package2" };

const packages = { gridArea: "packages" };

const pictures = { gridArea: "pictures" };

const bio = { gridArea: "bio" };

export default Profile;
