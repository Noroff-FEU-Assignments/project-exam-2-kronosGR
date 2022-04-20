import Center from '../components/Layout/Center';
import Images from '../components/Layout/Images';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';
import Promote from '../components/Promote/Promote';
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

      <div className={styles.promotions}>
        <Promote
          img='/images/promotion1.jpg'
          title='Most Popular'
          onClick={() => {
            console.log('clicked');
          }}
        />
        <Promote img='/images/promotion2.jpg' title='Most Favorites' onClick={() => {}} />
        <Promote img='/images/promotion3.jpg' title='Highest Ranked' onClick={() => {}} />
      </div>
      <Spacer size={60} />
    </Layout>
  );
}
