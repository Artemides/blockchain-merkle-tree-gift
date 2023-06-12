export enum CoinGift {
  SOL = "SOL",
  ADA = "ADA",
  BNB = "BNB",
  ETH = "ETH",
  BTC = "BTC",
}
export enum Rarity {
  Common = "Common",
  Uncommon = "Uncommon",
  Rare = "Rare",
  Epic = "Epic",
  Ultra = "Ultra",
}
export type Gift = {
  name: string;
  symbol: string;
  rarity: Rarity;
  quantity: number;
};

type CoinGifts = { [key in CoinGift]: Gift };

export const coinGifts: CoinGifts = {
  BTC: {
    name: "Bitcoin",
    symbol: "BTC",
    rarity: Rarity.Ultra,
    quantity: 1,
  },
  ETH: {
    name: "Ethereum",
    symbol: "ETH",
    rarity: Rarity.Epic,
    quantity: 1,
  },
  BNB: {
    name: "Binance Coin",
    symbol: "BNB",
    rarity: Rarity.Rare,
    quantity: 1,
  },
  ADA: {
    name: "Cardano",
    symbol: "ADA",
    rarity: Rarity.Uncommon,
    quantity: 1,
  },
  SOL: {
    name: "Solana",
    symbol: "SOL",
    rarity: Rarity.Common,
    quantity: 1,
  },
};
