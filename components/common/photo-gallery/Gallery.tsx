import { useCallback, useEffect, useState } from "react";
import { Box, Chip, Grid, Stack } from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export type GalleryFilter = "residential" | "commercial" | "custom" | "floors";

const CDNURL =
  "https://lrnpsaywzwvqlwziqayq.supabase.co/storage/v1/object/public/images";

export const FilterableGallery = () => {
  const [imageIndex, setImageIndex] = useState(-1);
  const [images, setImages] = useState<any[]>([]);
  const [folderFilter, setFolderFilter] =
    useState<GalleryFilter>("residential");

  const supabase = useSupabaseClient();

  const currentImage = images[imageIndex];
  const nextIndex = (imageIndex + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (imageIndex + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: any) => {
    setImageIndex(index);
  };
  const handleClose = () => setImageIndex(-1);
  const handleMovePrev = () => setImageIndex(prevIndex);
  const handleMoveNext = () => setImageIndex(nextIndex);

  const getImagesByFolder = async (folder: string) => {
    const { data, error } = await supabase.storage.from("images").list(folder, {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

    if (data !== null) {
      setImages(
        data
          .filter((file) => !file.name.startsWith("."))
          .map((image) => ({
            src: `${CDNURL}/${folderFilter}/${image.name}`,
          }))
      );
    } else {
      alert(error);
    }
  };

  useEffect(() => {
    getImagesByFolder(folderFilter);
  }, [folderFilter]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <Box>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1} mb={2}>
        {["Residential", "Commercial", "Floors", "Custom"].map((service) => (
          <Chip
            key={service}
            label={service}
            color="primary"
            variant={
              folderFilter === service.toLowerCase() ? "filled" : "outlined"
            }
            onClick={() =>
              setFolderFilter(service.toLowerCase() as GalleryFilter)
            }
          />
        ))}
      </Stack>
      <Stack direction="row" spacing={1}></Stack>
      {images.length > 0 ? (
        <Gallery
          images={images}
          rowHeight={250}
          onClick={handleClick}
          enableImageSelection={false}
        />
      ) : null}
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.src}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </Box>
  );
};
