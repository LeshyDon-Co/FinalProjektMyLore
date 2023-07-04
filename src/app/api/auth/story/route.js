import connect from "@/utils/db";
// import {getServerSession} from "next-auth";
import {NextResponse} from "next/server";
// import {type NextRequest} from "next/server";
import Story from "@/models/Story";
// import {useState} from "react";

// const [storyNation, setStoryNation]=

//-----------------POST---------------------//

//----------------GET----------------------//

export const GET = async (request) => {
  console.log("Hello from GETStorys");
  const {searchParams} = new URL(request.url);
  const nation = searchParams.get("nation");
  console.log(nation);
  // const data = "Wischi-Waschi-Bär";
  // console.log("reqGET", data);

  // const storyMain = "mainstory";
  // const storyNation = "flammengostory";

  // if (data === "Wischi-Waschi-Bär") {
  // const storyNation = "wiwastory";
  // const storyChar = await Story.find({name: storyNation});
  // } else if (data === "Flammengo") {
  // const storyNation = "flammengostory";
  // } else if (data === "Axolittle") {
  // const storyNation = "axolittlestory";
  // } else {
  // console.log("Keine Geschichte gefunden");
  // }

  // try {
  //   await connect();
  //   console.log("Ich bin connectet");
  //   const storys = await Story.find({name: storyMain});
  //   const storyChar = await Story.find({name: storyNation});
  //   // console.log("storywiwa", storywiwa);
  //   return new NextResponse(JSON.stringify([storys, storyChar]), {
  //     status: 200,
  //   });
  // } catch (error) {
  //   return new NextResponse("Database Error", {status: 500});
  // }
  // };

  if (nation === "Wischi-Waschi-Bär") {
    try {
      await connect();
      console.log("Ich bin connectet");
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
      console.log("Ich bin connectet");
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
      console.log("Ich bin connectet");
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
    console.log("Keine Geschichte gefunden");
  }
};
// }
// };
