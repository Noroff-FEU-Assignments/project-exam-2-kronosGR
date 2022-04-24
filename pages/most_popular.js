import { AccommodationsList } from '../components/Accommodations/AccommodationsList';
import { Error } from '../components/Error';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';
import { getMostPopular } from '../BackEnd/getMostPopular';

export default function MostPopular({ accommodations, error }) {
  return (
    <Layout>
      <Spacer size={30} />
      <h1>Most Popular</h1>
      {accommodations.length > 0 && (
        <AccommodationsList accommodations={accommodations} />
      )}
      <Error msg='Something went wrong. We apologize' error={error} />

      <Spacer size={60} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await getMostPopular();
  console.log(res.error);
  return {
    props: { accommodations: res.result, error: res.error },
  };
}
