import { Rarity } from "@/utils/gifts";
import { giftRarityColors } from "@/utils/rarityColors";
import Image from "next/image";
import React from "react";

type GiftProps = {
  name: string;
  rarity: Rarity;
  symbol: string;
};

export const Gift = ({ name, rarity, symbol }: GiftProps) => {
  const { rarityStyle } = giftRarityColors[rarity];
  return (
    <div
      className={
        " relative min-w-[100px] flex flex-col gap-2 ring-1 bg-slate-700/ px-4 py-1 rounded-lg shadow-xl " +
        rarityStyle
      }
    >
      <span className="font-extrabold text-center text-2xl">{symbol}</span>
      <span className={`text-sm font-normal text-center`}>{name}</span>
      <p
        className={
          `p-1 font-bold text-xs rounded-full   ring-1 text-center ` +
          rarityStyle
        }
      >
        {rarity}
      </p>
      <span className="font-bold text-center">10</span>
    </div>
  );
};
