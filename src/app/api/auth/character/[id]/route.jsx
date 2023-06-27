import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async (request, {params}) => {
    const {id} = params;

    try {
        await connect()

        const chars = await Character.findByID(id);

        return new NextResponse(JSON.stringify(chars), {status: 200});
    } catch (error) {
        return new NextResponse("DAtabase Error", {status: 500});
    };
};