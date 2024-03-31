'use client'

import { useState } from "react"
import Page1 from "./AsidePages/Page1"
import Page2 from "./AsidePages/Page2"
import Page3 from "./AsidePages/Page3"
import Page4 from "./AsidePages/Page4"

type Page = 1 | 2 | 3 | 4

export default function AsideValues() {
  const [page, setPage] = useState<Page>(1)

  const nextPage = () => {
    setPage((prev) => prev + 1 as Page)
  }

  const prevPage = () => {
    setPage((prev) => prev - 1 as Page)
  }

  return (
    <section className="flex flex-col items-center">
      <div className="flex gap-4">
        <button disabled={page === 1} onClick={() => prevPage()}>{"\<"}</button>
        <p>{page}</p>
        <button disabled={page === 4} onClick={() => nextPage()}>{"\>"}</button>
      </div>
      {page === 1 && <Page1 />}
      {page === 2 && <Page2 />}
      {page === 3 && <Page3 />}
      {page === 4 && <Page4 />}
    </section>
  )
}