import { unstable_cache } from "next/cache"
import prisma from "./prisma"
import { Prisma } from '@prisma/client'
import { cache } from "react"


export type videoError = {
  title?: string; 
  embedCode?: string; 
  userId?: string; 
}

export const getUserVideos = unstable_cache(
    cache(async (userId: string) => {
      return prisma.video.findMany({ where: { userId: userId } })
    }),
    ["videos", "userId"]
)


export const getVideos = unstable_cache(
  cache(async () => {
    return prisma.video.findMany()
  }),
  ["videos"]
)


export async function createVideo(
  {
      userId,
      title,
      embedCode,
  }: {
  userId: string,
  title: string,
  embedCode: string
}
) {    
  return prisma.video.create({
          data: {
              userId,
              title,
              embedCode,
          },
      })
}

