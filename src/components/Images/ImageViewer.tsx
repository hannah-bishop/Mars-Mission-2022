import { useEffect, useState } from "react";
import { ImagesUrls } from "./ImagesUrls";
import "./ImageViewer.scss";

export function ImageViewer(props: any) {
  const [selectedImage, setSelectedImage] = useState();
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=2021-02-19&api_key=IgINDcTiL7hEVwnUDaK28gqY58yA3XIfQZfNhH8l"
    )
      .then((response) => response.json())
      .then((result) => {
        const photos = result.photos;
        let urlList: any = [];
        for (let i = 0; i < 20 && i < photos.length; i++) {
          urlList.push(photos[i].img_src);
        }
        setUrls(urlList);
        setSelectedImage(urlList[0])
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="imageViewer">
      <h1 className="header">Images of the Mars Perseverance Rover</h1>
      <img src={selectedImage} className="hero-image"/>
      <ImagesUrls urls={urls} selectedImage={selectedImage} onClickImage={(url: any) => setSelectedImage(url)} />
    </div>
  );
}
