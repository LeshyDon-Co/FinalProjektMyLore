import connect from "@/utils/db";
// import {getServerSession} from "next-auth";
import {NextResponse} from "next/server";
import Story from "@/models/Story";

//-----------------POST---------------------//

//----------------GET----------------------//

export const GET = async () => {
  console.log("Hello from GETStorys");
  //   const session = await getServerSession();
  const storyMain = "mainstory";

  try {
    await connect();
    console.log("Ich bin connectet");
    const storys = await Story.find({name: storyMain});
    // const storywiwa = await Story.find({name: "wiwastory"});
    return new NextResponse(JSON.stringify(storys), {status: 200});
  } catch (error) {
    return new NextResponse("Database Error", {status: 500});
  }
};
