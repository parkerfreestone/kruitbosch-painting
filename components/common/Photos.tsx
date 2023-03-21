import React from "react";
import Head from "next/head";
import { ImageList, ImageListItem } from "@mui/material";

const Photos = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
      author: "swabdesign",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
      author: "Pavel Nekoranec",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
      author: "Charles Deluvio",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
      author: "Christian Mackie",
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Blinds",
      author: "Darren Richardson",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
      author: "Taylor Simpson",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
      author: "Ben Kolde",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
      author: "Philipp Berndt",
    },
  ];

  return (
    <ImageList variant="standard" cols={4} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Photos;
