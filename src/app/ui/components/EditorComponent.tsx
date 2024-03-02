"use client"

import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';



export default function EditorComponent({initialValue}: {initialValue: string}) {
    const editorRef: any = useRef(null);
    const [dirty, setDirty] = useState(false);
    useEffect(() => setDirty(false), [initialValue]);
    const save = () => {
      if (editorRef.current) {
        const content = editorRef.current.getContent();
        setDirty(false);
        editorRef.current.setDirty(false);
        // an application would save the editor content to the server here
        console.log(content);
      }
    };
    return (
      <>
        <Editor
          initialValue={initialValue}
          onInit={(evt, editor) => editorRef.current = editor}
          onDirty={() => setDirty(true)}
        />
        <button onClick={save} disabled={!dirty}>Save</button>
        {dirty && <p>You have unsaved content!</p>}
      </>
    );
  }
  