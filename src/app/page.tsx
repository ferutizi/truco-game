'use client'

import { useState } from "react";
import { DragEvent } from "react";

export default function Home() {
  const [order1, setOrder1] = useState<string[]>([])
  const [order2, setOrder2] = useState<string[]>([])
  const [order3, setOrder3] = useState<string[]>([])
  const [order4, setOrder4] = useState<string[]>([])

  const handleOnDrag = (e: DragEvent<HTMLImageElement>, carta: string) => {
    console.log('dragStart')
    e.dataTransfer.setData("carta", carta)
  }

  const handleOnDrop1 = (e: React.DragEvent) => {
    const carta = e.dataTransfer.getData("carta")
    setOrder1([...order1, carta])
  }

  const handleOnDrop2 = (e: React.DragEvent) => {
    const carta = e.dataTransfer.getData("carta")
    setOrder2([...order2, carta])
  }

  const handleOnDrop3 = (e: React.DragEvent) => {
    const carta = e.dataTransfer.getData("carta")
    setOrder3([...order3, carta])
  }

  const handleOnDrop4 = (e: React.DragEvent) => {
    const carta = e.dataTransfer.getData("carta")
    setOrder4([...order4, carta])
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <main className="flex min-h-screen flex-col justify-between items-center p-24" >
      <div>
        <h1>Truco Games</h1>
        <p>Ordena las cartas según su valor</p>
        <p>Si hay dos del mismo valor, van en la misma línea</p>
        <p>Si sobran líneas deben quedar libres las de menor valor</p>
        <button>Barajar</button>
      </div>
      <section className="flex gap-4 w-screen justify-center h-80 bg-neutral-800">
        <article draggable={false} onDrop={handleOnDrop1} onDragOver={handleDragOver} className="bg-red-400 w-60">
          {
            order1.map((card, index) => (
              <img key={index} src={`/${card}.png`} />
            ))
          }
        </article>
        <article onDrop={handleOnDrop2} onDragOver={handleDragOver} className="bg-amber-400 w-60">
          {
            order2.map((card, index) => (
              <img key={index} src={`/${card}.png`} />
            ))
          }
        </article>
        <article onDrop={handleOnDrop3} onDragOver={handleDragOver} className="bg-blue-400 w-60">
          {
            order3.map((card, index) => (
              <img key={index} src={`/${card}.png`} />
            ))
          }
        </article>
        <article onDrop={handleOnDrop4} onDragOver={handleDragOver} className="bg-slate-400 w-60">
          {
            order4.map((card, index) => (
              <img key={index} src={`/${card}.png`} />
            ))
          }
        </article>

      </section>
      <div className="flex gap-16 select-none">
        <img draggable onDragStart={(e) => handleOnDrag(e, "1e")} src="/1e.png" />
        <img draggable onDragStart={(e) => handleOnDrag(e, "2e")} src="/2e.png" />
        <img draggable onDragStart={(e) => handleOnDrag(e, "3e")} src="/3e.png" />
        <img draggable onDragStart={(e) => handleOnDrag(e, "4e")} src="/4e.png" />
      </div>
    </main>
  );
}
