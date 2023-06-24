import Character from "@/models/Character";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


//-----------POST---------------------//

//-----------GET----------------------//
export const GET = async (request) => {
    try {
        await connect();
        const characters = await Character.findAll();
        return new NextResponse(JSON.stringify(characters), {status: 200});
    } catch (error) {
        return new NextResponse("Database Error", {status: 500});
    }
}

//-----------UPDATE-------------------//

//-----------DELETE-------------------//