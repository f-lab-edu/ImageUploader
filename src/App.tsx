import "./App.css";
import Header from "./components/Header";
import ImageUploader from "./components/ImageUploader";
import ImageList from "./components/ImageList";
import { useImageList } from "./hooks/useImageList";

function App() {
  const { images, registerImage } = useImageList();

  return (
    <>
      <Header></Header>
      <ImageUploader onRegisterImage={registerImage}></ImageUploader>
      <ImageList images={images}></ImageList>
    </>
  );
}

export default App;
