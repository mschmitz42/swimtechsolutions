"use client"

import { FormGroup } from "@/components/FormGroup"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FormEvent, ReactNode, Suspense, useRef } from "react"

export default function UserSearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const query = searchParams.get("query") || ""
  const queryRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const params = new URLSearchParams(searchParams)
    params.set("query", queryRef.current?.value || "")

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="form mb-4">
      <div className="form-row">
        <FormGroup>
          <label htmlFor="query">Email</label>
          <input
            type="search"
            name="query"
            id="query"
            defaultValue={query}
            ref={queryRef}
          />
        </FormGroup>
        <button className="btn">Filter</button>
      </div>
    </form>
  )
}
