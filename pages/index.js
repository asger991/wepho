import Layout from "../components/Layout";
import PictureWindows from "../components/PictureWindows";
import SearchBox from "../components/SearchBox";
import AboutText from "../components/AboutText";

const Home = () => (
  <Layout>
    <PictureWindows />
    <SearchBox heading="FIND DIN FOTOGRAF HER" marginTop="6" />
    <AboutText />
  </Layout>
);

export default Home;
