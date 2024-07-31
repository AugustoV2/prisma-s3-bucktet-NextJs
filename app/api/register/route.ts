import { NextRequest, NextResponse } from "next/server";


import {Details} from "../../../prisma/index";

export async function POST(req: NextRequest) {
  return await Details(req);
}