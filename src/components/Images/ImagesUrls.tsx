import "./ImagesUrls.scss";

export function ImagesUrls(props: { urls: string[]; selectedImage: string | undefined; onClickImage: (arg: string) => void; }) {
  const urls = props.urls;
  const selected = props.selectedImage;
  return (
    <div className="thumb-container">
      {urls.map((url: string) => {
        if (url === selected) {
          return (<img
            className="thumb-sizes selected"
            src={url}
            onClick={() => props.onClickImage(url)}
          />);
      }
        return (
          <img
            className="thumb-sizes"
            src={url}
            onClick={() => props.onClickImage(url)}
          />
        );
      })}
    </div>
  );
}
