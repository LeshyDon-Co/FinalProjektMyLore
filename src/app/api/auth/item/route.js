import Item from "@/models/Item";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


//-----------------POST---------------------//


//----------------GET----------------------//

export const GET = async (request) => {
    try {
        await connect();
        const items = await Item.find();
        return new NextResponse(JSON.stringify(items), {status: 200});
    } catch (error) {
        return new NextResponse("Database Error", {status: 500})
    }
}

//-----------UPDATE-------------------//

//-----------DELETE-------------------//



