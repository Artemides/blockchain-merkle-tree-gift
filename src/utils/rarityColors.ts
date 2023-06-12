import { Rarity } from "./gifts";

type Color = {
  rarityStyle: string;
};

type RarityColors = {
  [key in Rarity]: Color;
};
export const giftRarityColors: RarityColors = {
  Ultra: {
    rarityStyle: "ultra-rare",
  },
  Epic: {
    rarityStyle: "epic-rare",
  },
  Rare: {
    rarityStyle: "rare-rare",
  },
  Uncommon: {
    rarityStyle: "uncommon-rare",
  },
  Common: {
    rarityStyle: "common-rare",
  },
};
