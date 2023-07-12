import Item from "@/models/Item";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async(request, {params}) => {

    // const {charID} = params;
    
    console.log("Hello from get!", request);
    try {
        await connect();

        // const itemsofCharacter = await Character.findById(charID).populate('items');
        return new NextResponse(JSON.stringify(itemsofCharacter), {status: 200});
    } catch (error) {
        return new NextResponse("Database Error", {status: 500})
    }
}