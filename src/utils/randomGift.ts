import { CoinGift } from "./gifts";

export const randomRarityProbabilities = [40, 60, 75, 85, 100];

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const pickRandomGiftIndex = () => {
  const randomNumer = getRandomNumber();

  const [giftIndex] = randomRarityProbabilities.reduce(
    ([giftIndex, lastProb], prob, idx) => {
      if (randomNumer <= prob && randomNumer >= lastProb) {
        giftIndex = idx;
      }
      return [giftIndex, prob];
    },
    [0, 0]
  );
  return giftIndex;
};

export const getRandomGift = () => {
  const gifts = Object.values(CoinGift);
  const giftIndex = pickRandomGiftIndex();
  return gifts[giftIndex];
};
