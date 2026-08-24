import { Jimp } from 'jimp';

async function processPregnantMother() {
  console.log('Processing pregnant mother image...');
  const image = await Jimp.read('public/pregnant_mother.jpg');
  
  // Background wall sample in top right corner
  const bgR = 105, bgG = 95, bgB = 90;

  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];

    const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);
    const isNeutralWall = Math.abs(r - g) < 20 && Math.abs(g - b) < 20 && r < 140 && g < 130 && b < 125;
    
    if (dist < 50 || isNeutralWall) {
      this.bitmap.data[idx + 3] = 0; // Transparent
    }
  });

  await image.write('public/pregnant_mother_nobg.png');
  console.log('Successfully generated public/pregnant_mother_nobg.png');
}

async function processDoctor() {
  console.log('Processing Dr. Jyothsna image...');
  const image = await Jimp.read('public/dr_jyothsna.png');

  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];

    const brightness = (r + g + b) / 3;
    const colorVariance = Math.abs(r - g) + Math.abs(g - b) + Math.abs(r - b);

    // Top office wall background is off-white (brightness > 190, low saturation)
    if (y < image.bitmap.height * 0.44 && brightness > 190 && colorVariance < 28) {
      this.bitmap.data[idx + 3] = 0; // Transparent
    }
  });

  await image.write('public/dr_jyothsna_nobg.png');
  console.log('Successfully generated public/dr_jyothsna_nobg.png');
}

async function run() {
  await processPregnantMother();
  await processDoctor();
}

run().catch(console.error);
