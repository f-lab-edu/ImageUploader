type ImagePreviewProps = {
  previewUrl: string;
  image: File;
  onRegisterImage: (file: File) => void;
};

const ImagePreview = ({
  previewUrl,
  image,
  onRegisterImage,
}: ImagePreviewProps) => {
  const onRegister = () => {
    onRegisterImage(image);
  };
  return (
    <>
      <div className="preview-img">
        <img src={previewUrl} alt="preview" />
      </div>
      <div className="preview-btn">
        <button type="button" onClick={onRegister}>
          등록
        </button>
      </div>
    </>
  );
};

export default ImagePreview;
