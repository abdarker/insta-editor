import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { filterList } from "@/lib/filterlist";
import { cn } from "@/lib/utils";
import { toPng } from "html-to-image";
import React, { useCallback, useRef, useState } from "react";
import "../assets/instagram.css";
import ImageUpload from "./ImageUpload";
import { Button } from "./ui/button";
import Slider from "./ui/range-slider";
const MainContent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imgResultRef = useRef<HTMLDivElement>(null);
  const [imagefilter, setImageFilter] = useState<string>("none");
  const [contrast, setContrast] = useState<number>(100);
  const [brightness, setBrightness] = useState<number>(100);

  const handleRangeChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContrast(parseInt(event.target.value, 10));
  };
  const handleBrightness = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBrightness(parseInt(event.target.value, 10));
  };

  const handleDownloadImage = useCallback(() => {
    if (imgResultRef.current === null) {
      return;
    }
    toPng(imgResultRef.current, {
      quality: 2,
      pixelRatio: 5,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [imgResultRef]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-4 pt-4">
        <ImageUpload setSelectedImage={setSelectedImage} />
        {selectedImage && (
          <div ref={imgResultRef} className="md:w-1/2 md:h-1/2">
            <img
              className={cn("h-full w-full", imagefilter)}
              src={selectedImage}
              alt="Selected Image"
            />
          </div>
        )}
        <Select onValueChange={setImageFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Select Instagram Filter" />
          </SelectTrigger>
          <SelectContent>
            {filterList?.map((filter, index) => (
              <SelectItem
                key={index}
                className="cursor-pointer"
                value={filter.class}
              >
                {filter.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-red-600">
          brightness and contrast still under development :p
        </p>
        <Slider
          label="Contrast"
          value={contrast}
          handleRangeChange={handleRangeChange}
        />
        <Slider
          label="Brightness"
          value={brightness}
          handleRangeChange={handleBrightness}
        />
        {selectedImage && (
          <div>
            <Button className="" onClick={handleDownloadImage}>
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
