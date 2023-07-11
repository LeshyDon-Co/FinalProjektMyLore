import connect from "@/utils/db";
import {NextResponse} from "next/server";
import Quest from "@/models/Quest";

//-----------------POST---------------------//

//----------------GET----------------------//

export const GET = async (request) => {
  console.log("Hello from GETQuests");
  const {searchParams} = new URL(request.url);
  const questArray = searchParams.get("quests");
  console.log(questArray);

  try {
    await connect();
    console.log("Ich bin connectet");
    const quest = await Story.find({name: "mainstory"});
    const storyChar = await Story.find({name: "wiwastory"});
    // console.log("storywiwa", storywiwa);
    return new NextResponse(JSON.stringify([storyMain, storyChar]), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Database Error", {status: 500});
  }
};
