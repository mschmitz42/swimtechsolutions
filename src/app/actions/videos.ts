"use server"

import { createVideo, videoError } from "@/db/videos"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export async function createVideoAction(prevState: unknown, formData: FormData) {

    let [data, errors] = validateVideo(formData)

    if (data == null) return errors
  
    const result = await createVideo(data)
  
    revalidatePath("/dashboard/lessons")
    revalidatePath(`/dashboard/lessons/${data.userId}`)
    redirect("/dashboard/lessons")
  }

  
  function validateVideo(formData: FormData) {
    const errors: videoError = {}

    const userId = formData.get("userId") as string
    const title = formData.get("title") as string
    const embedCode = formData.get("embedCode") as string

    let isValid = true
  
    
    if (title === "") {
      errors.title = "Title is Required"
      isValid = false
    }
      
    if (embedCode === "") {
        errors.embedCode = "Embed Code is required"
        isValid = false
    }

    
       
    return [isValid ? { userId, title, embedCode } : undefined, errors] as const
  }

