import React from "react";
import { pixelize } from "../utils/pixelize";
import UploadButton from "./UploadButton";

const IMG = "./Lenna.png";
const Layout: React.FC<any> = () => {
  const [outputSrc, setOutputSrc] = React.useState("");
  const [uploadSrc, setUploadSrc] = React.useState("");
  const [uploadOutputSrc, setUploadOutputSrc] = React.useState("");
  const [value, setValue] = React.useState("100");
  const [uploadValue, setUploadValue] = React.useState("100");
  React.useEffect(() => {
    pixelize(IMG).then((src) => {
      // console.log(src);
      setOutputSrc(src);
    });
  }, []);

  React.useEffect(() => {
    console.log(value);
    pixelize(IMG, Number(value) * 0.01).then((src) => {
      // console.log(src);
      setOutputSrc(src);
    });
  }, [value]);

  React.useEffect(() => {
    pixelize(uploadSrc, Number(uploadValue) * 0.01).then((src) => {
      // console.log(src);
      setUploadOutputSrc(src);
    });
  }, [uploadValue, uploadSrc]);

  const handleImageUpload = (e: any) => {
    const [file] = e.target.files;
    if (file) {
      console.log(file);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setUploadSrc(e.target.result);
      };
      reader.readAsDataURL(file);
      // const url = reader.readAsDataURL(file);
      // setUploadSrc(url);
      // console.log(url);
    }
  };
  return (
    <main className="">
      <header className="text-center py-4">
        <h1 className="text-4xl font-black italic">Pixelizer</h1>
      </header>
      <div className="bg-slate-200 text-center py-16 pb-32">
        {/* <h4 className="text-2xl font-bold mb-8">Example</h4> */}
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
        <UploadButton />
        <input
          type="file"
          accept="image/*"
          multiple={false}
          onChange={handleImageUpload}
        />
        <p className="text-sm text-stone-600 my-4">이미지 사이즈 제한</p>
        <input
          type="range"
          min="4"
          max="100"
          step="4"
          value={uploadValue}
          onChange={(e) => setUploadValue(e.target.value)}
        />
        <div className="justify-center gap-4 py-4 flex ">
          <div className="inline-block">
            <img src={uploadSrc} />
          </div>
          <div className="inline-block">
            <img src={uploadOutputSrc} />
          </div>
        </div>
      </div>
      <div className="bg-slate-200 text-center py-8"></div>
    </main>
  );
};

export default Layout;
