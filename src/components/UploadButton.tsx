import React from "react";

interface Props {
  //;
  value?: string;
  onChange?: () => void;
  disabled?: boolean;
  accept?: string;
  multiple?: boolean;
  id?: string;
}
const UploadButton: React.FC<Props> = ({
  disabled = false,
  onChange,
  accept = "image/*",
  multiple = false,
  id = "",
  children,
}) => {
  return (
    <label htmlFor="temp2">
      <input id="temp2" type="file" accept="image/*" hidden />
      <span className="w-40 rounded-full border-blue-500 text-white font-bold	border-2 bg-blue-500 py-2 px-4 text-md hover:bg-blue-600 hover:border-blue-600">
        Upload Image
      </span>
    </label>
  );
};

export default UploadButton;
