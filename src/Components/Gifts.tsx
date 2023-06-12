import React from "react";
import { Gift as GiftItem, Rarity } from "@/utils/gifts";
import { Gift } from "./Gift";

type GiftsProps = {
  gifts: GiftItem[];
};

export const Gifts = ({ gifts }: GiftsProps) => {
  return (
    <section id="gifts" className="flex gap-4">
      {gifts.map((gift) => (
        <Gift
          key={gift.name}
          name={gift.name}
          rarity={gift.rarity}
          symbol={gift.symbol}
          amount={gift.quantity}
        />
      ))}
    </section>
  );
};
