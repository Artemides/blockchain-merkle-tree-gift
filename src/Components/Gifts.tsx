import React from "react";
import { Gift } from "./Gift";
import { Rarity } from "@/utils/gifts";

export const Gifts = () => {
  return (
    <section id="gifts" className="flex gap-4">
      <Gift name="Bitcoin" rarity={Rarity.Ultra} symbol={"BTC"} />
      <Gift name="Ethereum" rarity={Rarity.Epic} symbol={"ETH"} />
      <Gift name="Binance" rarity={Rarity.Rare} symbol={"BNB"} />
      <Gift name="Cardano" rarity={Rarity.Uncommon} symbol={"ADA"} />
      <Gift name="Solana" rarity={Rarity.Common} symbol={"SOL"} />
    </section>
  );
};
