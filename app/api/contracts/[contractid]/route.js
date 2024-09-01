import { MONGO_URL } from "@/lib/db";
import { Contract } from "@/lib/model/contract";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request,content){
    const contractId = content.params.contractid;
    const filter={_id:contractId}
    const payload = await request.json();
    await mongoose.connect(MONGO_URL);
    const result = await Contract.findOneAndUpdate(filter,payload);
    return NextResponse.json({result,success:true});
}

export async function GET(request,content){
    const contractId = content.params.contractid;
    const record={_id:contractId}
    await mongoose.connect(MONGO_URL);
    const result = await Contract.findById(record);
    return NextResponse.json({result,success:true});
}