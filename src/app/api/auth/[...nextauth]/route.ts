// api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { AuthOptions } from "@/components/AuthOptions"


const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };

