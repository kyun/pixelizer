import React from "react";
import { pixelize } from "../utils/pixelize";
import UploadController from "./UploadController";

const IMG = "./Lenna.png";
const Layout: React.FC<any> = () => {
  const [outputSrc, setOutputSrc] = React.useState("");
  const [uploadSrc, setUploadSrc] = React.useState("");
  const [uploadOutputSrc, setUploadOutputSrc] = React.useState("");
  const [value, setValue] = React.useState("100");
  const [uploadValue, setUploadValue] = React.useState("100");
  React.useEffect(() => {
    pixelize(IMG).then((src) => {
      setOutputSrc(src);
    });
  }, []);

  React.useEffect(() => {
    pixelize(IMG, Number(value) * 0.01).then((src) => {
      setOutputSrc(src);
    });
  }, [value]);

  React.useEffect(() => {
    pixelize(uploadSrc, Number(uploadValue) * 0.01).then((src) => {
      setUploadOutputSrc(src);
    });
  }, [uploadValue, uploadSrc]);

  const handleImageUpload = (e: any) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setUploadSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="">
      <header className="text-center py-4">
        <h1 className="text-4xl font-black italic">Pixelizer</h1>
      </header>
      <div className="bg-slate-200 text-center py-16 pb-32">
        <div className="inline-flex justify-center items-center gap-2 text-sm text-blue-800">
          Pixelation:
          <input
            type="range"
            min="4"
            max="100"
            step="4"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {value} %
        </div>
        <div className="justify-center gap-4 py-4 flex ">
          <div className="inline-block">
            <img src={IMG} />
          </div>
          <div className="inline-block">
            <img src={outputSrc} />
          </div>
        </div>
      </div>
      <div className="bg-slate-300 py-8 text-center">
        <UploadController onChange={handleImageUpload}>
          <span className="w-40 rounded-full border-blue-500 text-white font-bold	border-2 bg-blue-500 py-2 px-4 text-md hover:bg-blue-600 hover:border-blue-600">
            Upload Image
          </span>
        </UploadController>

        <p className="text-sm text-stone-600 my-4">이미지 사이즈 제한</p>
        <div className="inline-flex justify-center items-center gap-2 text-sm text-blue-800">
          Pixelation:
          <input
            type="range"
            min="4"
            max="100"
            step="4"
            value={uploadValue}
            onChange={(e) => setUploadValue(e.target.value)}
          />
          {uploadValue} %
        </div>

        <div className="justify-center gap-4 py-4 flex ">
          {uploadSrc === "" ? (
            <div className="inline-block w-56 h-56 bg-gray-100" />
          ) : (
            <div className="inline-block">
              <img src={uploadSrc} />
            </div>
          )}
          {uploadOutputSrc === "" ? (
            <div className="inline-block w-56 h-56 bg-gray-100" />
          ) : (
            <div className="inline-block">
              <img src={uploadOutputSrc} />
            </div>
          )}
        </div>
      </div>
      <div className="bg-slate-200 text-center py-8"></div>
    </main>
  );
};

export default Layout;
