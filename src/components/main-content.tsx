import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import React, { useRef, useState } from "react";
import ImageUpload from "./ImageUpload";
import { Button } from "./ui/button";
const MainContent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imgResultRef = useRef<HTMLImageElement>(null);

  //   Idk if it even works
  //   const handleDownloadImage = () => {
  //     if (imgResultRef.current) {
  //       const imageSrc = imgResultRef.current.currentSrc;
  //       const link = document.createElement("a");
  //       link.href = imageSrc;
  //       link.download = "downloaded_image.png";
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     }
  //   };

  //   Using Dom to Image

  const handleDownloadImage = () => {
    if (imgResultRef.current) {
      domtoimage
        .toBlob(imgResultRef.current)
        .then(function (blob) {
          saveAs(blob, "result.png");
        })
        .catch(function (error) {
          console.error("ooops, something went wrong!", error);
        });
    }
  };

  //   console.log('My Log: ',imgResultRef.current.width )

  return (
    <div className="container mx-auto px-4">
      <div>
        <ImageUpload setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <div>
            <img
              className="h-full w-full grayscale"
              src={selectedImage}
              alt="Preview"
              ref={imgResultRef}
            />
          </div>
        )}
        <Button onClick={handleDownloadImage}>Download</Button>
      </div>
    </div>
  );
};

export default MainContent;
