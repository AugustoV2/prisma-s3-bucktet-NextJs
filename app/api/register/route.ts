import { NextRequest, NextResponse } from "next/server";


import {Details} from "../../../prisma/index";
import read from "../../../prisma/index";
import update from "../../../prisma/index"

export async function POST(req: NextRequest) {
 update();
 return NextResponse.json({ message: 'Hello - POST' });
}