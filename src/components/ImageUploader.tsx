import { useState } from "react";
import type { ChangeEvent } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState<File | null>(null);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) {
      setImage(null);
      return;
    }

    setImage(files[0]);
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={onChangeImage} />

      {image && (
        <div className="preview-img">
          <img src={URL.createObjectURL(image)} alt="preview" />
        </div>
      )}
    </>
  );
};

export default ImageUploader;
