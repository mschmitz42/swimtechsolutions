import { unstable_cache } from "next/cache"
import prisma from "./prisma"
import { Prisma } from '@prisma/client'
import { cache } from "react"
import { getUser } from "@/db/users"


export type lessonError = {
    description?: string; 
    date?: string; 
    body?: string;
    userId?: string; 
  }
  
export const getUserLessons = unstable_cache(
    cache(async (userId: string) => {
      return prisma.lesson.findMany({ where: { userId: userId } })
    }),
    ["video", "userId"]
)


export const getLessons = unstable_cache(
  cache(async () => {
    return prisma.lesson.findMany()
  }),
  ["video"]
)


export async function createLesson(
    {
        userId,
        description,
        date,
        body,
    }: {
    userId: string,
    description: string
    date: string
    body: string
  }
  ) {    
    return prisma.lesson.create({
            data: {
                userId,
                description,
                date,
                body,
            },
        })
  }
  
//   export async function updateUser(
//     userId: string,
//     {
//         description,
//         date,
//         body,
//     }: {
//         description: string
//         date: string
//         body: string
//     }
//   ) {
    
//     let errors : lessonError = {}
//     let user: Prisma.UserUpdateInput
//     const hashedPassword = password? await hash(password, 12): "";
  
//     if (hashedPassword !== "") {
//       user = {
//         email: email,
//         name: firstName + " " + lastName,
//         profile: {
//           update: {
//             firstName: firstName,
//             lastName: lastName,
//             phone: phone,
//             password: hashedPassword
//           }
//         }
//       }
//     } else {
//       user = {
//         email: email,
//         name: firstName + " " + lastName,
//         profile: {
//           update: {
//             firstName: firstName,
//             lastName: lastName,
//             phone: phone,
//           }
//         }
//       }
//     } 
  
//     try {
//       const result = await prisma.user.update({ 
//         where: {
//           id: userId,
//         },
//         data: user 
//       })
//       return null;
//     } catch (e) {
//       if (e instanceof Prisma.PrismaClientKnownRequestError) {
//         // The .code property can be accessed in a type-safe manner
//         if (e.code === 'P2002') {
//           errors.email = "Email must be unique"
//           return errors;
//         }
//       }
//       throw e;
//     }
//   }
  