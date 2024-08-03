import connectMongoDb from "@/lib/mongodb";
import Publication from "@/models/publications";
import { NextResponse } from "next/server";

export async function GET() {
    connectMongoDb();
    const publications = await Publication.find();
    return NextResponse.json({publications});
}