import { NextRequest, NextResponse } from "next/server";
import Write from "../../../prisma/index";
import Details from "../../../prisma/index";

export function POST(req: NextRequest) {
  Details(req);

    return NextResponse.json({ message: "success" });
}