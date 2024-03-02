import { unstable_cache } from "next/cache"
import prisma from "./prisma"
import { Prisma } from '@prisma/client'
import { cache } from "react"


export const getUserVideos = unstable_cache(
    cache(async (userId: string) => {
      return prisma.video.findMany({ where: { userId: userId } })
    }),
    ["video", "userId"]
)


export const getVideos = unstable_cache(
  cache(async () => {
    return prisma.video.findMany()
  }),
  ["video"]
)
