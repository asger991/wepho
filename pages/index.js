import LayoutContainer from "../components/Layout";
import Page from "../components/Page";
import PictureWindows from "../components/PictureWindows";
import SearchBox from "../components/SearchBox";
import AboutText from "../components/AboutText";
// import "antd/dist/antd.css";

const Home = () => (
  <LayoutContainer>
    <Page>
      <PictureWindows />
      <SearchBox />
      <AboutText />
    </Page>
  </LayoutContainer>
);

export default Home;
