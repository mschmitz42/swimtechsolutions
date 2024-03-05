"use client"

import { createVideoAction } from "@/app/actions/videos"
import { ReactNode, Suspense } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { FormGroup } from "@/components/FormGroup"
import Link from "next/link"
import React, { useRef, useState } from 'react';
import { videoError } from "@/db/videos"


  type VideoFormProps = {
    userSelectOptions: ReactNode
    video?: { title: string; embedCode: string; userId: string; }
  }
      

export function VideoForm( { video, userSelectOptions }: VideoFormProps ) {
    // const action = (user == null) ? createLessonAction : editLessonAction.bind( null, user.userId );
    const action = createVideoAction;

    const [errors, formAction] = useFormState(action, {})

    return (
        <form action={formAction} className="form">
        <div className="form-row">
            <FormGroup errorMessage={errors.userId}>
                <label htmlFor="userId">Swimmer</label>
                <select
                    required
                    name="userId"
                    id="userId"
                    defaultValue={video?.userId}
                >
                    <Suspense fallback={<option value="">Loading...</option>}>
                    {userSelectOptions}
                    </Suspense>
                </select>
            </FormGroup>
        </div>
        <div className="form-row">
            <FormGroup errorMessage={errors.title}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="description"
                    defaultValue={video?.title}
                />
            </FormGroup>
        </div>
        <div className="form-row">
            <FormGroup errorMessage={errors.embedCode}>
                <label htmlFor="embedCode">Embed Code</label>
                <textarea
                    name="embedCode"
                    id="embedCode"
                    defaultValue={video?.embedCode}
                />
            </FormGroup>
        </div>
        <div className="form-row form-btn-row">
            <Link
                className="btn btn-outline"
                href={"/dashboard/videos"}
                >
                Cancel
            </Link>
            <SubmitButton />
        </div>
        </form>
    )
}
  

function SubmitButton() {
    const { pending } = useFormStatus()
  
    return (
      <button disabled={pending} className="btn" type="submit">
        {pending ? "Saving" : "Save"}
      </button>
    )
  }
  

