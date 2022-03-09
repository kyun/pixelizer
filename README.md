- tailwind

1. pixelize

```js
const percentage = 0.4;

const { width, height } = image;
const canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
const context = canvas.getContext("2d");
context.imageSmoothingEnabled = false;
context.drawImage(image, 0, 0, width * percentage, height * percentage);
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

2. 컴포넌트
