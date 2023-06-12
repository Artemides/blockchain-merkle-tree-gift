"use client";
import { Gift } from "@/Components/Gift";
import { Gifts } from "@/Components/Gifts";
import { CoinGift, Rarity } from "@/utils/gifts";
import Image from "next/image";

import { FormEvent, useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export default function Home() {
  const [name, setName] = useState("");
  const [fetching, setFetching] = useState(false);
  const [success, setSuccess] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [gifts, setGifts] = useState<CoinGift[]>([]);

  useEffect(() => {
    if (!window) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    setWindowSize({ width, height });
  }, []);

  const verifyName = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFetching(true);
    const data = {
      name,
    };
    const response = await fetch("http://localhost:3000/api/proof", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    if (!response.ok) {
      setSuccess(false);
    } else {
      setSuccess(true);
    }

    setFetching(false);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    console.log({ responseData });
  };
  return (
    <main className=" min-h-screen grid place-items-center  p-24">
      {success && (
        <ReactConfetti width={windowSize.width} height={windowSize.height} />
      )}
      <form
        onSubmit={(e) => verifyName(e)}
        className="w-[300px] h-64 flex flex-col justify-center gap-8 bg-slate-900 rounded-lg shadow-lg py-8 px-4 ring-sky-400/50 ring-1"
      >
        <h2 className="text-xl font-bold text-center">Verify Merkle Tree</h2>
        <input
          type="text"
          placeholder="Name to verify"
          className="custom-input text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={fetching}
        />
        <button
          type="submit"
          className="custom-button success-color"
          disabled={fetching}
        >
          Verify
        </button>
      </form>
      <Gifts />
    </main>
  );
}
