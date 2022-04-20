import Images from '../components/Layout/Images';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';
import SearchBar from '../components/SearchBar/SearchBar';

import styles from '../styles/index.module.css';
export default function Home() {
  return (
    <Layout>
      <SearchBar />
      <Spacer size={30} />
      <h1>Explore Bergen</h1>
      <Spacer size={20} />
      <Images />
      <Spacer size={40} />
      <h2 className={styles.title_h2}>Accommodations</h2>
    </Layout>
  );
}
