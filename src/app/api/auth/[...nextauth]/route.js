import connect from "@/utils/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";

  const handler = NextAuth({
        providers: [
          CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {

              await connect();
      
              try {
                const user = await User.findOne({
                  email: credentials.emaillogin,
                });
      
                console.log(user);
                if (user) {
                  const isPasswordCorrect = await bcrypt.compare(
                    credentials.passwordlogin,
                    user.password
                  );
      
                  if (isPasswordCorrect) {
                    return user;
                  } else {
                    throw new Error("Wrong Credentials!");
                  }
                } else {
                  throw new Error("User not found!");
                }
              } catch (err) {
                throw new Error(err);
              }
            },
          }),
        ],
        pages: {
          error: "/loginandregister",
          success: "/characteroverview",
        },      
      });

export {handler as GET, handler as POST};