import React from "react";
import { Input } from "./ui/input";

interface ImageUploadProps {
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setSelectedImage }) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      if (validateImageType(file)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        event.target.value = "";
        setSelectedImage(null);
        alert("Please select a valid image file (JPG, PNG, or JPEG)");
      }
    }
  };

  const validateImageType = (file: File) => {
    return ["image/jpeg", "image/png", "image/jpg"].includes(file.type);
  };

  return (
    <div>
      <Input
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUpload;
