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
  const splitElement = questArray.split(",");
  console.log(splitElement);

  try {
    await connect();
    console.log("Ich bin connectet");
    const quests = await Quest.find({_id: {$in: splitElement}});
    console.log("quest severside:", quests);
    return new NextResponse(JSON.stringify(quests), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Database Error", {status: 500});
  }
};
