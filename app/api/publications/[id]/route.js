import connectMongoDb from "@/lib/mongodb";
import Publication from "@/models/publications";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle: title, newDescription: description, newURL: url, newDatePublished: datePublished, newIsShown: isShown} = await request.json();
    await connectMongoDb();
    await Publication.findByIdAndUpdate(id, {title, description, url, datePublished, isShown});
    return NextResponse.json({message: "Publication updated"}, {status: 200});
}

export async function GET(request, {params}){
    
    const {id} = params;
    await connectMongoDb();
    const publication = await Publication.findOne({_id: id});
    console.log(publication)
    return NextResponse.json({publication}, {status: 200});
}