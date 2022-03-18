# Pixelizer

You can convert your image pixelized.

![image](https://github.com/kyun/pixelizer/blob/main/doc/image.png?raw=true)

## Demo

https://kyun.github.io/pixelizer

## Highlight

1. pixelize

```js
const percentage = 0.4;

const { width, height } = image;
const canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
const context = canvas.getContext("2d");
context.imageSmoothingEnabled = false;
// 1. resize Image
context.drawImage(image, 0, 0, width * percentage, height * percentage);
// 2. draw resized Iamge to canvas
context.drawImage(
  canvas,
  0,
  0,
  width * percentage,
  height * percentage,
  0,
  0,
  width,
  height
);
const url = canvas.toDataURL();
```

2. Reusable Component

```ts
interface Props {
  value?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  accept?: string;
  multiple?: boolean;
  id?: string;
}
const UploadController: React.FC<Props> = ({
  disabled = false,
  onChange,
  accept = "image/*",
  multiple = false,
  id = "upload-controller",
  children,
}) => {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="file"
        accept={accept}
        hidden
        onChange={onChange}
        multiple={multiple}
        disabled={disabled}
      />
      {children}
    </label>
  );
};
```
