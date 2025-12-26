import { useState } from "react";

export const useImageList = () => {
  const [images, setImages] = useState<File[]>([]);

  const registerImage = (file: File) => {
    setImages((prev) => [...prev, file]);
  };

  return {
    images,
    registerImage,
  };
};
