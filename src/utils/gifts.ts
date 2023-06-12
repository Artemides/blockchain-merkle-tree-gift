export enum CoinGift {
  BTC = "BTC",
  ETH = "ETH",
  BNB = "BNB",
  ADA = "ADA",
  SOL = "SOL",
}
export enum Rarity {
  Common = "Common",
  Uncommon = "Uncommon",
  Rare = "Rare",
  Epic = "Epic",
  Ultra = "Ultra",
}
type Gift = {
  name: string;
  symbol: string;
  rarity: Rarity;
};

type CoinGifts = { [key in CoinGift]: Gift };

export const coinGifts: CoinGifts = {
  BTC: {
    name: "Bitcoin",
    symbol: "BTC",
    rarity: Rarity.Ultra,
  },
  ETH: {
    name: "Ethereum",
    symbol: "ETH",
    rarity: Rarity.Epic,
  },
  BNB: {
    name: "Binance Coin",
    symbol: "BNB",
    rarity: Rarity.Rare,
  },
  ADA: {
    name: "Cardano",
    symbol: "ADA",
    rarity: Rarity.Uncommon,
  },
  SOL: {
    name: "Solana",
    symbol: "SOL",
    rarity: Rarity.Common,
  },
};
