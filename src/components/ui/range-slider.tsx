import React from "react";

interface props {
  label: string;
  value: number;
  handleRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider: React.FC<props> = ({
  label,
  value,
  handleRangeChange,
}: props) => {
  return (
    <div>
      <label className="md:text-lg text-sm md:font-semibold font-medium">
        {label}: {value}%
      </label>
      <div className="relative -mt-3">
        <input
          type="range"
          className="range w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer "
          value={value}
          min={0}
          max={200}
          defaultValue={100}
          step={1}
          onChange={handleRangeChange}
        />
      </div>
    </div>
  );
};

export default Slider;
