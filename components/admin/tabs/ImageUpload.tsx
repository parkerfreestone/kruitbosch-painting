import {
  Alert,
  Box,
  Button,
  Card,
  CardMedia,
  Collapse,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { SyntheticEvent, useState } from "react";
import { CloseSharp } from "@mui/icons-material";
import ReactImageUploading, { ImageListType } from "react-images-uploading";
import { GalleryFilter } from "../../common/photo-gallery/Gallery";

const maxNumber = 69;

type SubmissionType = {
  message: string;
  type: "error" | "success";
  open: boolean;
};

export const ImageUpload = () => {
  const [images, setImages] = useState<any[]>([]);
  const [submission, setSubmission] = useState<SubmissionType>({
    message: "",
    type: "error",
    open: false,
  });
  const [folderFilter, setFolderFilter] =
    useState<GalleryFilter>("residential");

  const supabase = useSupabaseClient();

  const onChange = (imageList: ImageListType) => {
    setImages(imageList as never[]);
  };

  const handleFilterChange = (e: SelectChangeEvent) => {
    setFolderFilter(e.target.value as GalleryFilter);
  };

  const handleUpload = () => {
    images.forEach(async (image) => {
      const { error } = await supabase.storage
        .from("images")
        .upload(`${folderFilter}/${image.file?.name}`, image?.file, {
          cacheControl: "3600",
          upsert: false,
        });
      if (!error) {
        setSubmission({
          message: `Image${
            images.length > 1 ? "s" : null
          } successfully uploaded.`,
          type: "success",
          open: true,
        });
        return;
      }

      setSubmission({
        message: `There was an error uploading images. If error persists, please contact (385) 288-7519: ${error.message}`,
        type: "error",
        open: true,
      });
    });
  };

  return (
    <>
      <Collapse in={submission.open}>
        <Alert
          sx={{ mb: 3 }}
          severity={submission.type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setSubmission({ ...submission, open: false });
              }}
            >
              <CloseSharp fontSize="inherit" />
            </IconButton>
          }
        >
          {submission.message}
        </Alert>
      </Collapse>
      <ReactImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <Stack spacing={2}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <FormControl>
                <InputLabel>Gallery</InputLabel>
                <Select
                  size="small"
                  value={folderFilter}
                  label="Gallery"
                  onChange={handleFilterChange}
                >
                  {["Residential", "Commercial", "Custom", "Floors"].map(
                    (val) => (
                      <MenuItem key={val} value={val.toLowerCase()}>
                        {val}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
              <Button
                variant="contained"
                onClick={handleUpload}
                disabled={images.length < 1}
              >
                Upload Selected Images
              </Button>
              <Button
                variant="outlined"
                color="error"
                disabled={images.length < 1}
                onClick={onImageRemoveAll}
              >
                Remove all images
              </Button>
            </Stack>
            <Button
              sx={{
                padding: 10,
                border: "2px dashed #afafaf",
                borderSpacing: 20,
              }}
              onClick={onImageUpload}
              {...dragProps}
            >
              {isDragging ? "Drop here please" : "Click or Drop Here"}
              {imageList.map((image, index) => (
                <img key={index} src={image.data_url} alt="" />
              ))}
            </Button>
            <Grid container>
              {imageList.map((image, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <Paper variant="outlined" className="image-item">
                    <img src={image.dataURL} alt="" width="100%" />
                    {/* <FormControl sx={{ mx: 2 }}>
                      <InputLabel>Name</InputLabel>
                      <TextField fullWidth />
                    </FormControl> */}
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      spacing={2}
                      justifyContent="flex-end"
                      p={2}
                    >
                      <Button
                        variant="contained"
                        fullWidth
                        color="secondary"
                        onClick={() => onImageUpdate(index)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="contained"
                        fullWidth
                        color="error"
                        onClick={() => onImageRemove(index)}
                      >
                        Remove
                      </Button>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Stack>
        )}
      </ReactImageUploading>
    </>
  );
};
