import connect from "@/utils/db";
import { NextResponse } from "next/server";
import { ObjectId } from 'bson';
import Character from "@/models/Character";

//----------------------------------------------------------------------------------------//

export const DELETE = async (request, {params}) => {
  const  {id} = params;

  try {
    await connect();

    await Character.findByIdAndDelete(id);

    return new NextResponse("Charakter has been deleted", {status: 200});
  } catch (error) {
    return new NextResponse("Database Error in DELETE", {status: 500});
  }
}