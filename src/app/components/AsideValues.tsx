'use client'

import { Dispatch, SetStateAction, useState } from "react"
import Page1 from "./AsidePages/Page1"
import Page2 from "./AsidePages/Page2"
import Page3 from "./AsidePages/Page3"
import Page4 from "./AsidePages/Page4"

type Page = 1 | 2 | 3 | 4

export default function AsideValues() {
  const [page, setPage] = useState<Page>(1)
  const [openHelp, setOpenHelp] = useState(false)

  const nextPage = () => {
    setPage((prev) => prev + 1 as Page)
  }

  const prevPage = () => {
    setPage((prev) => prev - 1 as Page)
  }

  return (
    <>
      {openHelp
        ? <section className="flex flex-col items-center absolute z-10 top-0 left-0 w-[36rem] h-screen justify-between py-8 custom-gradient border-white border-r">
          <button className="absolute top-0 right-0 m-6 border px-2 py-1 rounded-full my-4 hover:bg-green-950 transition-all ease-in duration-200" onClick={() => setOpenHelp(false)}>X</button>
          <div className="flex gap-4">
            <button disabled={page === 1} className="disabled:opacity-50 transition-all ease-in duration-200" onClick={() => prevPage()}>{"\<"}</button>
            <p>{page}</p>
            <button disabled={page === 4} className="disabled:opacity-50 transition-all ease-in duration-200" onClick={() => nextPage()}>{"\>"}</button>
          </div>

          {page === 1 && <Page1 />}
          {page === 2 && <Page2 />}
          {page === 3 && <Page3 />}
          {page === 4 && <Page4 />}

          <div className="flex gap-4">
            <button disabled={page === 1} onClick={() => prevPage()}>{"\<"}</button>
            <p>{page}</p>
            <button disabled={page === 4} onClick={() => nextPage()}>{"\>"}</button>
          </div>
        </section>
        : <button className="absolute top-0 left-0 m-8 border py-1 px-2 rounded-md hover:bg-green-950 transition-all ease-in duration-200" onClick={() => setOpenHelp(true)}>Ayuda</button>
      }

    </>
  )
}