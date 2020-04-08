import Head from 'next/head'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PictureWindows from '../components/PictureWindows'
import SearchBox from '../components/SearchBox';

const Home = () => (
  <Layout>
    <Page>
      <PictureWindows />
      <SearchBox />

    </Page>
  </Layout>
)

export default Home

