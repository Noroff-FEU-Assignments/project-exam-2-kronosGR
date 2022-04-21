import { AccommodationsList } from '../components/Accommodations/AccommodationsList';
import Layout from '../components/Layout/Layout';
import Spacer from '../components/Layout/Spacer';
import { getAccommodations } from '../BackEnd/getAccommodations';

export default function Accommodations({ accommodations, error }) {
  return (
    <Layout>
      <Spacer size={30} />
      <h1>Accommodations</h1>

      <AccommodationsList accommodations={accommodations} />

      <Spacer size={60} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await getAccommodations();
  console.log(res.result);

  return {
    props: { accommodations: res.result, error: res.error },
  };
}
