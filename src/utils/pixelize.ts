function pixelize(src: string, percentage: number = 1): Promise<string> {
  const canvas = document.createElement("canvas"); // output canvas
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;

  const canvas2 = document.createElement("canvas"); // pixelized canvas
  const context2 = canvas2.getContext("2d") as CanvasRenderingContext2D;

  const _p = percentage > 1 ? 1 : percentage;
  context.imageSmoothingEnabled = false;

  return new Promise((resolve) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const { width, height } = image;
      canvas.width = image.width;
      canvas.height = image.height;

      canvas2.width = image.width;
      canvas2.height = image.height;

      context.imageSmoothingEnabled = false;
      context2.imageSmoothingEnabled = false;

      context.clearRect(0, 0, width, height);
      context2.clearRect(0, 0, width, height);
      context2.drawImage(image, 0, 0, width * _p, height * _p);
      context.drawImage(
        canvas2,
        0,
        0,
        width * _p,
        height * _p,
        0,
        0,
        width,
        height
      );
      const src = canvas.toDataURL();
      resolve(src);
    };
  });
}

export { pixelize };
