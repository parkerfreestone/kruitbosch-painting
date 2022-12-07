import { Container } from "@mui/system";
import { FilterableGallery } from "../components/common/photo-gallery/Gallery";
import HeroBanner from "../components/home/HeroBanner";

const Photos = () => {
  return (
    <>
      <HeroBanner heading="Photos" desc="View examples of our latest work." />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <FilterableGallery />
      </Container>
    </>
  );
};

export default Photos;
