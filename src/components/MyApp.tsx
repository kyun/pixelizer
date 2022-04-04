import React from "react";
import { SAMPLE_IMG } from '../constants/sample';
import Pixelator from './Pixelator';
import UploadController from "./UploadController";



const MyApp: React.FC<any> = () => {
  const [uploadSrc, setUploadSrc] = React.useState("");
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
        <Pixelator src={SAMPLE_IMG} />
      </div>
      <div className="bg-slate-300 py-8 text-center">
        <UploadController onChange={handleImageUpload}>
          <span className="w-40 rounded-full border-blue-500 text-white font-bold	border-2 bg-blue-500 cursor-pointer py-2 px-4 text-md hover:bg-blue-600 hover:border-blue-600">
            Upload Image
          </span>
        </UploadController>
        <p className="text-sm text-stone-600 my-4"></p>
       { uploadSrc && <Pixelator src={uploadSrc} />}
      </div>
      <div className="bg-slate-200 text-center py-8"></div>
    </main>
  );
};

export default MyApp;
