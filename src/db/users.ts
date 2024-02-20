import { unstable_cache } from "next/cache"
import prisma from "./prisma"
import { cache } from "react"

export const getUsers = unstable_cache(
  cache(async () => {
    // await wait(2000)

    return prisma.user.findMany({
        include: {
          profile: true,
        },
      })  
    }),
  ["users"]
)

// export async function getUsers() {
//   return prisma.user.findMany({
//     include: {
//       profile: true,
//     },
//   })  
// }

export const getUser = unstable_cache(
  cache(async (userId: string) => {
    // await wait(2000)
    return prisma.user.findUnique({ 
      where: { id: userId },
      include: {
        profile: true,
      },
    })
  }),
  ["user", "userId"]
)

export const getUserByEmail = unstable_cache(
  cache(async (email: string) => {
    // await wait(2000)
    return prisma.user.findUnique({ 
      where: { email: email },
      include: {
        profile: true,
      },
    })
  }),
  ["user", "userId"]
)


function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
