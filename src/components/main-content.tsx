import React, { useCallback, useRef, useState } from "react";
import ImageUpload from "./ImageUpload";
import { Button } from "./ui/button";
const MainContent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imgResultRef = useRef<HTMLImageElement>(null);

  //   const handleDownloadImage = useCallback(() => {
  //     if (imgResultRef.current === null) {
  //       return;
  //     }

  //     toPng(imgResultRef.current, { cacheBust: true })
  //       .then((dataUrl) => {
  //         const link = document.createElement("a");
  //         link.download = "my-image-name.png";
  //         link.href = dataUrl;
  //         link.click();
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [imgResultRef]);

  const handleDownloadImage = useCallback(() => {
    if (imgResultRef.current === null) {
      return;
    }
    try {
      const imgElement = imgResultRef.current;
      const canvas = document.createElement("canvas");
      // if i take this size image file size becomes enormus,
      canvas.width = imgResultRef.current?.naturalWidth;
      canvas.height = imgResultRef.current?.naturalHeight;
      const ctx = canvas.getContext("2d");

      // Draw image onto canvas
      ctx?.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");

      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "download.png";
      a.click();
    } catch (error) {
      console.log(error);
    }
  }, [imgResultRef]);

  return (
    <div className="container mx-auto px-4">
      <div className="py-4">
        <ImageUpload setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <div className="mt-4">
            <img
              className="h-full w-full grayscale custom-filter" // i want to add custom css filter as well
              src={selectedImage}
              alt="Selected Image"
              ref={imgResultRef}
            />
          </div>
        )}
        <Button className="mt-4" onClick={handleDownloadImage}>
          Download
        </Button>
      </div>
    </div>
  );
};

export default MainContent;
