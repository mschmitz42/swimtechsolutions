"use client"

import { createLessonAction } from "@/app/actions/lessons"
import { ReactNode, Suspense } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { FormGroup } from "@/components/FormGroup"
import Link from "next/link"
import React, { useRef, useState, useEffect } from 'react';
import { lessonError } from "@/db/lessons"
import { Editor } from '@tinymce/tinymce-react';


  type LessonFormProps = {
    userSelectOptions: ReactNode
    lesson?: { description: string; date: string; body: string; userId: string; }
  }
      

export function LessonForm( { lesson, userSelectOptions }: LessonFormProps ) {
    // const action = (user == null) ? createLessonAction : editLessonAction.bind( null, user.userId );
    const action = createLessonAction;

    const [errors, formAction] = useFormState(action, {})

    const date_now = Intl.DateTimeFormat("en-US").format(new Date());

    const editorRef: any = useRef(null);
    const [dirty, setDirty] = useState(false);
    useEffect(() => setDirty(false), [lesson?.body]);

    // const save = () => {
    //   if (editorRef.current) {
    //     const content = editorRef.current.getContent();
    //     setDirty(false);
    //     editorRef.current.setDirty(false);
    //     // an application would save the editor content to the server here
    //     console.log(content);
    //   }
    // };

    return (
        <form action={formAction} className="form">
        <div className="form-row">
            <FormGroup errorMessage={errors.userId}>
                <label htmlFor="userId">Swimmer</label>
                <select
                    required
                    name="userId"
                    id="userId"
                    defaultValue={lesson?.userId}
                >
                    <Suspense fallback={<option value="">Loading...</option>}>
                    {userSelectOptions}
                    </Suspense>
                </select>
            </FormGroup>
            <FormGroup errorMessage={errors.date}>
                <label htmlFor="date">Date</label>
                <input
                    type="text"
                    name="date"
                    id="date"
                    required
                    defaultValue={lesson?.date ?? date_now}
                />
            </FormGroup>
        </div>
        <div className="form-row">
            <FormGroup errorMessage={errors.description}>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    defaultValue={lesson?.description}
                />
            </FormGroup>
        </div>
        <div className="form-row">
            <FormGroup errorMessage={errors.body}>
                <Editor
                    apiKey="9901i643t1st9uyu6mqxezdrv15cp1vv9bbmji16u6wjcvii"
                    initialValue={lesson?.body}
                    onInit={(evt, editor) => editorRef.current = editor}
                    onDirty={() => setDirty(true)}
                    id="body_editor"
                    textareaName="body"
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                          'bold italic forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | bullist numlist outdent indent | ' +
                          'removeformat | help',
                        content_style: 'body { font-family:"Open Sans"; font-size:18px }'
                      }}
              
                />
                {/* <button onClick={save} disabled={!dirty}>Save</button> */}
                {dirty && <p>You have unsaved content!</p>}
           </FormGroup>
        </div>
        <div className="form-row form-btn-row">
            <Link
                className="btn btn-outline"
                href={"/dashboard/lessons"}
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
  


{/* <div id="PasswordBox" class="register-form-group">
<div class="row align-items-center">
    <div class="col-10">
        <asp:label runat="server" associatedControlID="Password">Password*</asp:label>
        <asp:TextBox ID="Password" runat="server" CssClass="form-control login-form-control" TextMode="Password" maxlength="50" />
    </div>
    <div class="col-2 d-none d-xl-block">
        <div class="tool-tip" role="tooltip" id="passwordrules">
            <!-- info icon -->
            <span class="material-symbols-outlined">info</span>
            <span class="tooltiptext">Must be between 8 and 50 characters including 1 upper case, 1 lower case and 1 digit.</span>
        </div>
    </div>
</div>
</div> */}
