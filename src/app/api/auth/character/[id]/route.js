import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Character from "@/models/Character";


//----------------GET----------------------//

export const GET = async (request, {params}) => {

  const {id} = params;
  // console.log(id);

    try {
      await connect();
      
      const character = await Character.findOne({_id:id}).populate('items');

      const characterItems = character.items;

      return new NextResponse(JSON.stringify(characterItems), {status: 200});

  } catch (error) {
    return new NextResponse("Database Error", {status: 500});
  };
};
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