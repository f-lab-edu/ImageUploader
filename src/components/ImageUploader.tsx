import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
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
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) return;

    onRegisterImage(image);
    setImage(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onChangeImage}
        />

        {image && (
          <>
            <ImagePreview image={image} />

            <div className="preview-btn">
              <button type="submit">등록</button>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default ImageUploader;
