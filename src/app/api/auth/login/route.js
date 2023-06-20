import User from "@/models/User";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

//-----------POST------------------//


//-----------GET------------------//


export const GET = async (request) => {
    const {emaillogin, passwordlogin} = await request.json();

    console.log("hello from GET");

    await connect();
   

    // try {
    //     const user = await User.findOne({
    //         email: emaillogin,
    //     });
    //     console.log(user);

    //     //wenn User mit der Email gefunden wird, dann prüfe PW
    //     if(user){
    //         const isPWcorrect = await bcrypt.compare(passwordlogin, password);

    //         //Wenn PW korrekt, logge User ein
    //         if(isPWcorrect){
    //             return new NextResponse("User erfolgreic eingelogt", {
    //                 status: 201,
    //             });
    //         }else{
    //             throw new Error("Falsche Eingabe!");
    //         };
    //     }else{
    //         throw new Error("Kein User mit eingegebener Email gefunden!")
    //     }
    // } catch (error) {
    //     throw new Error(error);
    // }
}