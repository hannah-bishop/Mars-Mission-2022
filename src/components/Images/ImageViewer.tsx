import { useEffect, useState } from "react";
import { ImageThumbnail } from "./ImageThumbnail";
import "./ImageViewer.scss";

export function ImageViewer() {
  const [selectedImage, setSelectedImage] = useState<string>();
  const [urls, setUrls] = useState<string[]>([]);
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
        setSelectedImage(urlList[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="image-viewer">
      <div className="header">Images of the Mars Perseverance Rover</div>
      <img src={selectedImage} className="hero-image" />
      <ImageThumbnail
        urls={urls}
        selectedImage={selectedImage}
        onClickImage={(url: string) => setSelectedImage(url)}
      />
    </div>
  );
}
