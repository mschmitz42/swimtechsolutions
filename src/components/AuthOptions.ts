import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmail } from "@/db/users";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export const AuthOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "bob@bobjohnson.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const user = await getUserByEmail(credentials.email);

                if (!user || !user.profile || !user.profile.password) {
                    return null;
                }

                const isValidPassword = await compare( credentials.password, user.profile.password )

                if (!isValidPassword) {
                    return null;
                }

                return user;
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
}
