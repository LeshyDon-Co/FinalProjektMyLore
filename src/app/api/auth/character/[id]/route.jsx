import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async (request, {params}) => {
    const {email} = params;

    try {
        await connect()

        const chars = await Character.findBy????(email);

        return new NextResponse(JSON.stringify(chars), {status: 200});
    } catch (error) {
        return new NextResponse("DAtabase Error", {status: 500});
    };
};