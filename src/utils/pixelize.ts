function pixelize(src: string, percentage: number = 1): Promise<string> {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  const _p = percentage > 1 ? 1 : percentage;
  context.imageSmoothingEnabled = false;
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const { width, height } = image;
      canvas.width = image.width;
      canvas.height = image.height;
      context.imageSmoothingEnabled = false;

      context.clearRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width * _p, height * _p);
      context.drawImage(
        canvas,
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
