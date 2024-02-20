// api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { AuthOptions } from "@/components/AuthOptions"


export const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };

