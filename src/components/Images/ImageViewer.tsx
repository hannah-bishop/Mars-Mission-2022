import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { ImageThumbnail } from "./ImageThumbnail";
import "./ImageViewer.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function shuffleArray(array: any[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function ImageViewer() {
  const [urls, setUrls] = useState<string[]>([]);
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=2021-02-19&api_key=IgINDcTiL7hEVwnUDaK28gqY58yA3XIfQZfNhH8l"
    )
      .then((response) => response.json())
      .then((result) => {
        const photos = result.photos;
        shuffleArray(photos);
        setUrls(photos.slice(0, 20));
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="image-viewer">
      <div className="header">Mars Perseverance Rover Images</div>
      <Carousel>
        {urls.map((url: any) => {
          return (
            <div>
              <img src={url.img_src} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
