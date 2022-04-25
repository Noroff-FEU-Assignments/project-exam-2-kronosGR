import { AccommodationsList } from '../components/Accommodations/AccommodationsList';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';
import { getAccommodations } from '../BackEnd/getAccommodations';
import { Error } from '../components/Error';

export default function Search({ accommodations, error }) {
  return (
    <Layout>
      <Spacer size={30} />
      <h1>Accommodations</h1>
      {accommodations.length > 0 && (
        <AccommodationsList accommodations={accommodations} />
      )}
      <Error msg='Something went wrong. We apologize' error={error} />

      <Spacer size={60} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await getAccommodations();
  console.log(res.error);
  return {
    props: { accommodations: res.result, error: res.error },
  };
}
