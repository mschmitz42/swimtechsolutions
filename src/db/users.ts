import { unstable_cache } from "next/cache"
import prisma from "./prisma"
import { cache } from "react"

// export const getUsers = unstable_cache(
//   cache(async () => {
//     // await wait(2000)

//     return prisma.user.findMany()
//   }),
//   ["users"]
// )

export async function getUsers() {
  return prisma.user.findMany()  
}

export const getUser = unstable_cache(
  cache(async (userId: string) => {
    // await wait(2000)
    return prisma.user.findUnique({ where: { id: userId } })
  }),
  ["user", "userId"]
)

function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
