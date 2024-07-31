import { NextRequest, NextResponse } from "next/server";


import {deleteRecord, Details} from "../../../prisma/index";
import read from "../../../prisma/index";
import update from "../../../prisma/index"


export async function POST(req: NextRequest) {
 deleteRecord();
 return NextResponse.json({ message: 'Hello - POST' });
}