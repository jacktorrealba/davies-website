import connectMongoDb from "@/lib/mongodb";
import Publication from "@/models/publications";
import { NextResponse } from "next/server";

export async function GET(request) {
    connectMongoDb();
    // const {searchParams} = new URL(request.URL);
    // const perPage = parseInt(searchParams.get('perPage'), 10) || 10
    // const publicationArr = await Publication.find({}).sort({datePublished: -1}).limit(perPage);
    // const publicationCount = await Publication.countDocuments({});
    const publications = await Publication.find();
    return NextResponse.json({publications});
}

export async function POST(request) {
    const {title, url, description, datePublished} = await request.json();
    await connectMongoDb();
    await Publication.create({title, url, description, datePublished});
    return NextResponse.json({message: "Publication created"}, {status:201})
}