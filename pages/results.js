import LayoutContainer from "../components/Layout";
import Page from "../components/Page";
import SearchBox from "../components/SearchBox";
import ResultGrid from "../components/ResultGrid";

const SearchResults = () => (
  <LayoutContainer>
    <Page>
      <div
        style={{
          display: `flex`,
          justifyContent: `start`,
          width: `100%`,
          margin: `1rem 0 2rem 0`,
        }}
      >
        <span style={headerStyle}>
          Vi har fundet x antal fotografer, der matcher dine kriterier:
        </span>
      </div>
      <SearchBox text="Dine søgekriterier" />
      <ResultGrid />
    </Page>
  </LayoutContainer>
);

const headerStyle = {
  fontWeight: "500",
  fontSize: "26px",
  color: "#707070",
};

export default SearchResults;
