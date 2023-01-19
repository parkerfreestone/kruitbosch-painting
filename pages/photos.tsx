import { Container } from '@mui/system';
import Head from 'next/head';
import { FilterableGallery } from '../components/common/photo-gallery/Gallery';
import HeroBanner from '../components/common/HeroBanner';

const Photos = () => {
  return (
    <>
      <Head>
        <title>Kruitbosch Painting | Photos</title>
        <meta
          name="description"
          content="View examples of our latest work, with a filterable gallery at Kruitbosch Painting Inc."
        />
      </Head>
      <HeroBanner heading="Photos" desc="View examples of our latest work." />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <FilterableGallery />
      </Container>
    </>
  );
};

export default Photos;
