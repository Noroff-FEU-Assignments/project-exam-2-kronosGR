import Images from '../components/Layout/Images';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';
import SearchBar from '../components/SearchBar/SearchBar';

export default function Home() {
  return (
    <Layout>
      <SearchBar />
      <Spacer size={30} />
      <h1>Explore Bergen</h1>
      <Spacer size={20} />
      <Images />
    </Layout>
  );
}
