import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../input";
import Image from "next/image";

type TImageUploaderProps = {
  imageFiles: File[] | [];
  setImageFiles: Dispatch<SetStateAction<[] | File[]>>;
};

const NMImageUploader = ({
  imageFiles,
  setImageFiles,
}: TImageUploaderProps) => {
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);

      event.target.value = "";
    }
  };
  console.log(imageFiles);
  return (
    <div>
      <Input
        onChange={handleImageChange}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="image-uploader"
      />
      <label
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-200 transition"
        htmlFor="image-uploader"
      >
        Upload Logo
      </label>
      <div>
        {imagePreview.map((preview, index) => (
          <Image
            src={preview}
            key={index}
            width={500}
            height={100}
            alt="image error"
          />
        ))}
      </div>
    </div>
  );
};

export default NMImageUploader;
