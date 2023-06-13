import { verifyNameInList } from "@/app/data/data";
import { getRandomGift } from "@/utils/randomGift";
import { NextRequest, NextResponse } from "next/server";
import { coinGifts } from "../../../utils/gifts";
export async function POST(request: NextRequest) {
  const { name } = await request.json();

  const verified = verifyNameInList(name);
  if (!verified)
    return NextResponse.json(
      { message: "You are not in the list" },
      { status: 401 }
    );

  const giftType = getRandomGift();
  const gift = coinGifts[giftType];

  return NextResponse.json(
    {
      message: "Contratulations!, You are in the list",
      gift,
    },
    {
      status: 201,
    }
  );
}
