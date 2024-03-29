'use client'

import { useState } from "react";
import { DragEvent } from "react";

export default function Home() {
  const [randomCards, setRandomCards] = useState<string[]>(['1e', '2e', '3e', '4e'])
  const [order1, setOrder1] = useState<string[]>([])
  const [order2, setOrder2] = useState<string[]>([])
  const [order3, setOrder3] = useState<string[]>([])
  const [order4, setOrder4] = useState<string[]>([])

  const handleOnDrag = (e: DragEvent<HTMLImageElement>, carta: string) => {
    console.log('dragStart')
    e.dataTransfer.setData("carta", carta)
  }

  const handleOnDrop1 = (e: React.DragEvent) => {
    const card = e.dataTransfer.getData("carta")
    setOrder1([...order1, card])
    const newCards = randomCards.filter(c => c !== card)
    setRandomCards(newCards)
  }

  const handleOnDrop2 = (e: React.DragEvent) => {
    const card = e.dataTransfer.getData("carta")
    setOrder2([...order2, card])
    const newCards = randomCards.filter(c => c !== card)
    setRandomCards(newCards)
  }

  const handleOnDrop3 = (e: React.DragEvent) => {
    const card = e.dataTransfer.getData("carta")
    setOrder3([...order3, card])
    const newCards = randomCards.filter(c => c !== card)
    setRandomCards(newCards)
  }

  const handleOnDrop4 = (e: React.DragEvent) => {
    const card = e.dataTransfer.getData("carta")
    setOrder4([...order4, card])
    const newCards = randomCards.filter(c => c !== card)
    setRandomCards(newCards)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const cancelDrop = (card: string, order: number) => {
    const newCards = [...randomCards, card]
    setRandomCards(newCards)
    if (order === 1) {
      const newOrder1 = order1.filter(c => c !== card)
      order === 1 && setOrder1(newOrder1)
    }
    if (order === 2) {
      const newOrder1 = order1.filter(c => c !== card)
      order === 2 && setOrder2(newOrder1)
    }
    if (order === 3) {
      const newOrder1 = order1.filter(c => c !== card)
      order === 3 && setOrder3(newOrder1)
    }
    if (order === 4) {
      const newOrder1 = order1.filter(c => c !== card)
      order === 4 && setOrder4(newOrder1)
    }
  }

  return (
    <main className="flex min-h-screen flex-col justify-between items-center p-24" >
      {/*       <div>
        <h1>Truco Games</h1>
        <p>Ordena las cartas según su valor</p>
        <p>Si hay dos del mismo valor, van en la misma línea</p>
        <p>Si sobran líneas deben quedar libres las de menor valor</p>
        <button>Barajar</button>
      </div> */}
      <section className="flex gap-4 w-screen justify-center h-80 bg-neutral-800">
        <article draggable={false} onDrop={handleOnDrop1} onDragOver={handleDragOver} className="bg-red-400 w-60 select-none">
          {
            order1.map((card, index) => (
              <>
                <img draggable={false} key={index} src={`/${card}.png`} />
                <button type="button" onClick={() => cancelDrop(card, 1)}>X</button>
              </>
            ))
          }
        </article>
        <article draggable={false} onDrop={handleOnDrop2} onDragOver={handleDragOver} className="bg-amber-400 w-60 select-none">
          {
            order2.map((card, index) => (
              <>
                <img draggable={false} key={index} src={`/${card}.png`} />
                <button type="button" onClick={() => cancelDrop(card, 2)}>X</button>
              </>
            ))
          }
        </article>
        <article draggable={false} onDrop={handleOnDrop3} onDragOver={handleDragOver} className="bg-blue-400 w-60 select-none">
          {
            order3.map((card, index) => (
              <>
                <img draggable={false} key={index} src={`/${card}.png`} />
                <button type="button" onClick={() => cancelDrop(card, 3)}>X</button>
              </>
            ))
          }
        </article>
        <article draggable={false} onDrop={handleOnDrop4} onDragOver={handleDragOver} className="bg-slate-400 w-60 select-none">
          {
            order4.map((card, index) => (
              <>
                <img draggable={false} key={index} src={`/${card}.png`} />
                <button type="button" onClick={() => cancelDrop(card, 4)}>X</button>
              </>
            ))
          }
        </article>

      </section>
      <div className="flex gap-16 select-none">
        {
          randomCards.map(card =>
            <img draggable onDragStart={(e) => handleOnDrag(e, card)} src={card + '.png'} className="cursor-pointer" />
          )
        }
      </div>
    </main>
  );
}
