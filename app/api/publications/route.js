import connectMongoDb from "@/lib/mongodb";
import Publication from "@/models/publications";
import { NextResponse } from "next/server";

export async function GET() {
    connectMongoDb();
    const publications = await Publication.find();
    return NextResponse.json({publications});
}

export async function POST(request) {
    const {title, url, description, datePublished} = await request.json();
    await connectMongoDb();
    await Publication.create({title, url, description, datePublished});
    return NextResponse.json({message: "Publication created"}, {status:201})
}