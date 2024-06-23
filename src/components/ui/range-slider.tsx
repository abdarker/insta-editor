import React from "react";

interface props {
  label: string;
  value: number;
  oneSided?: boolean;
  handleRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider: React.FC<props> = ({
  label,
  value,
  handleRangeChange,
  oneSided,
}: props) => {
  return (
    <div>
      <label className="md:text-base text-sm">
        {label}: {oneSided ? value : value - 100}
      </label>
      <div className="relative -mt-3">
        <input
          type="range"
          className="range w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer "
          value={value}
          min={0}
          max={oneSided ? 100 : 200}
          defaultValue={oneSided ? 0 : 100}
          step={1}
          onChange={handleRangeChange}
        />
      </div>
    </div>
  );
};

export default Slider;
