import { getProductById } from '~/api/getProductById';

export async function generateRecommendedProducts(idToExclude: number) {
  const randomNumbers = new Set();
  const min = 70;
  const max = 90;

  while (randomNumbers.size < 4) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNumber !== idToExclude) {
      randomNumbers.add(randomNumber);
    }
  }

  const arrayNumbers = Array.from(randomNumbers);

  return [
    await getProductById(arrayNumbers[0]),
    await getProductById(arrayNumbers[1]),
    await getProductById(arrayNumbers[2]),
    await getProductById(arrayNumbers[3]),
  ];
}
