import { MONGO_URL } from "@/lib/db";
import { Contract } from "@/lib/model/contract";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(MONGO_URL);
    data = await Contract.find();
  } catch (error) {
    data={success:false}
  }

  return NextResponse.json({ result: data , success:true});
}

export async function POST(request){
    const payload = await request.json();
    await mongoose.connect(MONGO_URL);
    let contract = new Contract(payload);

    const result = await contract.save();
    return NextResponse.json({result,success:true})
}