import { Jimp } from 'jimp';

async function floodFillWomanBackground() {
  console.log('Flood-filling studio white background starting from outer edges...');
  const image = await Jimp.read('src/assets/images/Pregnant mother.png');
  const width = image.bitmap.width;
  const height = image.bitmap.height;

  const visited = new Uint8Array(width * height);
  const queue = [];

  // Seed outer border pixels
  for (let x = 0; x < width; x += 2) {
    queue.push([x, 0]);
    queue.push([x, height - 1]);
  }
  for (let y = 0; y < height; y += 2) {
    queue.push([0, y]);
    queue.push([width - 1, y]);
  }

  while (queue.length > 0) {
    const [x, y] = queue.pop();
    const idx = (y * width + x);
    if (visited[idx]) continue;
    visited[idx] = 1;

    const pixelIdx = idx * 4;
    const r = image.bitmap.data[pixelIdx + 0];
    const g = image.bitmap.data[pixelIdx + 1];
    const b = image.bitmap.data[pixelIdx + 2];

    const brightness = (r + g + b) / 3;
    const colorDiff = Math.max(r, g, b) - Math.min(r, g, b);

    // Connected studio white background condition
    if (brightness > 195 && colorDiff < 30) {
      image.bitmap.data[pixelIdx + 3] = 0; // Transparent

      // Traverse adjacent neighbors
      if (x > 0) queue.push([x - 1, y]);
      if (x < width - 1) queue.push([x + 1, y]);
      if (y > 0) queue.push([x, y - 1]);
      if (y < height - 1) queue.push([x, y + 1]);
    }
  }

  await image.write('public/pregnant_woman_clean.png');
  await image.write('public/pregnant_mother_nobg.png');
  console.log('Flood fill background removal complete!');
}

floodFillWomanBackground().catch(console.error);
