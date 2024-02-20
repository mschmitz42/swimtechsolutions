import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

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
                // handle auth
                console.log(credentials);
                const user = { id: "someId", name: "Mike", email: "mike@swimtechsolutions.com"};
                return user;
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
    ],
}
