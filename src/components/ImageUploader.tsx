import { useState } from "react";
import type { ChangeEvent } from "react";
import ImagePreview from "./ImagePreview";

const validateImage = (file: File): boolean => {
  if (!file.type.startsWith("image/")) {
    alert("이미지 파일만 업로드할 수 있습니다.");
    return false;
  }

  return true;
};
type Props = {
  onRegisterImage: (file: File) => void;
};

const ImageUploader = ({ onRegisterImage }: Props) => {
  const [image, setImage] = useState<File | null>(null);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) {
      setImage(null);
      return;
    }

    const file = files[0];

    if (!validateImage(file)) {
      setImage(null);
      return;
    }

    setImage(file);
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={onChangeImage} />

      {image && (
        <ImagePreview
          previewUrl={URL.createObjectURL(image)}
          image={image}
          onRegisterImage={onRegisterImage}
        />
      )}
    </>
  );
};

export default ImageUploader;
