import { useRef, useState } from "react";

export type ImageItem = {
  id: number;
  file: File;
};

export const useImageList = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const idRef = useRef(0);

  const registerImage = (file: File) => {
    const newImage: ImageItem = {
      id: idRef.current++,
      file,
    };
    setImages((prev) => [...prev, newImage]);
  };

  return {
    images,
    registerImage,
  };
};
