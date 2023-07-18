import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Quest from "@/models/Quest"
import Character from "@/models/Character";


//----------------GET----------------------//
export const GET = async (request, {params}) => {

    const {id} = params;

    try {
        await connect();

        const character = await Character.findOne({_id:id}).populate('quests');

        const characterQuests = character.quests;
        return new NextResponse(JSON.stringify(characterQuests), {status: 200});
    } catch (error) {
        console.log(error);
        return new NextResponse("Datafetching Error in GET quests", {status: 500});
    };
};