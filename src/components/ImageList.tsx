type Props = {
  images: File[];
};

const ImageList = ({ images }: Props) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <div className="item">
          <img src={URL.createObjectURL(image)} alt="Upload" />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
