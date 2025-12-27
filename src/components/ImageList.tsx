import type { ImageItem } from "../hooks/useImageList";

type Props = {
  images: ImageItem[];
};

const ImageList = ({ images }: Props) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <div className="item" key={image.id}>
          <img src={URL.createObjectURL(image.file)} alt="Upload" />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
