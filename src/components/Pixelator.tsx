import React from 'react';
import { pixelize } from '../utils/pixelize';

interface Props{
  src: string;
}
const Pixelator: React.FC<Props> = ({ src }) => {
  const [value, setValue] = React.useState('100');
  const [output, setOutput] = React.useState('');

  const handlePixelation = async () => {
    const _output = await pixelize(src, Number(value) * 0.01);
    setOutput(_output);
  }
  React.useEffect(() => {
    handlePixelation();
  }, [src, value]);

  return (<div >
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
            <img src={src} alt="sample" />
          </div>
          <div className="inline-block">
            <img src={output} alt="sample"/>
          </div>
        </div>
      </div>)
}

export default Pixelator;