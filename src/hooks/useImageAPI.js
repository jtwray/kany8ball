import React, { useState, useEffect } from "react";
import Axios from "axios";

export const useImageAPI = (image) => {
  const [imageimgAlt, setimageimgAlt] = useState("");
  useEffect(() => {
    Axios.get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${image}+img&image_type=photo`
    )
      .then((res) => console.log("imageimgAlt:", res))
      .then((res) => setimageimgAlt(res))
      .catch((err) => console.error(err));
  }, [image]);

  const [img, setimg] = useState("");
  useEffect(() => {
    Axios.get(`https://api.unsplash.com/search/photos?query=${image}`)
      .then((response) => setimg(response.data["0"].img))
      .then((response) => console.log("img:", img, "response:", response))

      .catch((error) => console.error(error));
  }, [image]);

  const [celebIMG, setCelebIMG] = useState();
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&query=${image}&page=1&include_adult=false`
    )
      .then((response) => setCelebIMG(response.data))
      .then((response) => console.log("img:", celebIMG, "response:", response))

      .catch((error) => console.error(error));
  }, [image]);

  return [img, imageimgAlt, celebIMG];
};
