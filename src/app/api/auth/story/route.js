import connect from "@/utils/db";
import {NextResponse} from "next/server";
import Story from "@/models/Story";

//-----------------POST---------------------//

//----------------GET----------------------//

export const GET = async (request) => {
  // console.log("Hello from GETStorys");
  const {searchParams} = new URL(request.url);
  const nation = searchParams.get("nation");
  // console.log(nation);

  if (nation === "Wischi-Waschi-Bär") {
    try {
      await connect();
      // console.log("Ich bin connectet");
      const storyMain = await Story.find({name: "mainstory"});
      const storyChar = await Story.find({name: "wiwastory"});
      // console.log("storywiwa", storywiwa);
      return new NextResponse(JSON.stringify([storyMain, storyChar]), {
        status: 200,
      });
    } catch (error) {
      return new NextResponse("Database Error", {status: 500});
    }
  } else if (nation === "Flammengo") {
    try {
      await connect();
      // console.log("Ich bin connectet");
      const storyMain = await Story.find({name: "mainstory"});
      const storyChar = await Story.find({name: "flammengostory"});
      // console.log("storywiwa", storywiwa);
      return new NextResponse(JSON.stringify([storyMain, storyChar]), {
        status: 200,
      });
    } catch (error) {
      return new NextResponse("Database Error", {status: 500});
    }
  } else if (nation === "Axolittle") {
    try {
      await connect();
      // console.log("Ich bin connectet");
      const storyMain = await Story.find({name: "mainstory"});
      const storyChar = await Story.find({name: "axolittlestory"});
      // console.log("storywiwa", storywiwa);
      return new NextResponse(JSON.stringify([storyMain, storyChar]), {
        status: 200,
      });
    } catch (error) {
      return new NextResponse("Database Error", {status: 500});
    }
  } else {
    // console.log("Keine Geschichte gefunden");
  }
};
// }
// };
