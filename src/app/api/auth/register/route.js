import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


//-----------POST------------------//
export const POST = async (request) => {
    const {username, email, password} = await request.json();

    await connect();

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User(
        {
            username,
            email,
            password: hashedPassword,
        }
    );

    try {
        await newUser.save();
        return new NextResponse("User erfolgreich registriert",{
            status: 201,
        });
    } catch (error) {
        return new NextResponse(err.message,{
            status: 500,
        });
    };
};

//-----------GET------------------//

//-----------UPDATE------------------//

//-----------DELETE------------------//