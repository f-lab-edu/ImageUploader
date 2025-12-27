type ImagePreviewProps = {
  image: File;
};

const ImagePreview = ({ image }: ImagePreviewProps) => {
  return (
    <>
      <div className="preview-img">
        <img src={URL.createObjectURL(image)} alt="preview" />
      </div>
    </>
  );
};

export default ImagePreview;
