'use client'

import Card from "./components/Card";
import useDraggableCards from "./hooks/useDraggableCards";

export default function Home() {

  const [
    randomCards,
    order1,
    order2,
    order3,
    order4,
    handleOnDrag,
    handleOnDrop1,
    handleOnDrop2,
    handleOnDrop3,
    handleOnDrop4,
    handleDragOver,
    cancelDrop
  ] = useDraggableCards()

  return (
    <main className="flex h-screen flex-col justify-between items-center p-12" >
      {/*       <div>
          <h1>Truco Games</h1>
          <p>Ordena las cartas según su valor</p>
          <p>Si hay dos del mismo valor, van en la misma línea</p>
          <p>Si sobran líneas deben quedar libres las de menor valor</p>
          <button>Barajar</button>
        </div> */}
      <div className="flex gap-16 select-none">
        {
          randomCards.map(card =>
            <img
              draggable
              onDragStart={(e) => handleOnDrag(e, card)}
              src={card + '.png'}
              className="cursor-pointer h-36"
            />
          )
        }
      </div>
      <section className="flex flex-col w-[60rem] justify-center gap-1">
        <article draggable={false} onDrop={handleOnDrop1} onDragOver={handleDragOver} className="flex justify-center items-center gap-4 bg-neutral-900 h-40 select-none rounded-lg">
          {
            order1.map((card, index) => (
              <Card card={card} key={index} order={1} cancelDrop={cancelDrop} />
            ))
          }
        </article>
        <article draggable={false} onDrop={handleOnDrop2} onDragOver={handleDragOver} className="flex justify-center items-center gap-4 bg-neutral-900 h-40 select-none rounded-lg">
          {
            order2.map((card, index) => (
              <Card card={card} key={index} order={2} cancelDrop={cancelDrop} />
            ))
          }
        </article>
        <article draggable={false} onDrop={handleOnDrop3} onDragOver={handleDragOver} className="flex justify-center items-center gap-4 bg-neutral-900 h-40 select-none rounded-lg">
          {
            order3.map((card, index) => (
              <Card card={card} key={index} order={3} cancelDrop={cancelDrop} />
            ))
          }
        </article>
        <article draggable={false} onDrop={handleOnDrop4} onDragOver={handleDragOver} className="flex justify-center items-center gap-4 bg-neutral-900 h-40 select-none rounded-lg">
          {
            order4.map((card, index) => (
              <Card card={card} key={index} order={4} cancelDrop={cancelDrop} />
            ))
          }
        </article>

      </section>
    </main>
  );
}
