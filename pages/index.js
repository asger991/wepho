import LayoutContainer from "../components/Layout";
import Page from "../components/Page";
import PictureWindows from "../components/PictureWindows";
import SearchBox from "../components/SearchBox";
import AboutText from "../components/AboutText";

const Home = () => (
  <>
    <LayoutContainer>
      <Page>
        <PictureWindows />
        <SearchBox heading="FIND DIN FOTOGRAF HER" marginTop="6" />
        <AboutText />
      </Page>
    </LayoutContainer>
    <style jsx global>{`
      body {
        font-family: "kaiti tc";
      }
    `}</style>
  </>
);

export default Home;
