import Item from "@/models/Item";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


//-----------------POST---------------------//

export const POST = async (request) => {
    const {charID} = await request.json();
    console.log("CharId in POST", charID);
    await connect();

    try {
        const res = await Character.findOne({_id: charID});
        console.log(res);
        return new NextResponse(JSON.stringify(res), {status: 201});
      } catch (error) {
        return new NextResponse("Database Error", {status: 500});
      }
}

//----------------GET----------------------//

export const GET = async (request) => {
    try {
        await connect();
        const items = await Item.find();
        // .populate('Item').exec();
        return new NextResponse(JSON.stringify(items), {status: 200});
    } catch (error) {
        return new NextResponse("Database Error", {status: 500})
    }
}


//-----------UPDATE-------------------//

//-----------DELETE-------------------//



