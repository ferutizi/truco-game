'use client'

import AsideValues from "./components/AsideValues";
import Card from "./components/Card";
import useDraggableCards from "./hooks/useDraggableCards";

export default function Home() {

  const [
    randomCards,
    order1,
    order2,
    order3,
    order4,
    win,
    lose,
    shuffleDeck,
    handleOnDrag,
    handleOnDrop1,
    handleOnDrop2,
    handleOnDrop3,
    handleOnDrop4,
    handleDragOver,
    cancelDrop,
    checkOrder
  ] = useDraggableCards()

  const winStyle = "bg-green-900 border border-green-400"
  const loseStyle = "bg-red-900 border border-red-600"
  const orderStyle = `flex justify-center items-center gap-4 bg-neutral-900 h-40 select-none rounded-lg ${win && winStyle} ${lose && loseStyle}`

  return (
    <main className="flex h-screen flex-col justify-between items-center p-12" >
      {/*       <div>
          <h1>Truco Games</h1>
          <p>Ordena las cartas según su valor</p>
          <p>Si hay dos del mismo valor, van en la misma línea</p>
          <p>Si sobran líneas deben quedar libres las de menor valor</p>
          <button>Barajar</button>
        </div> */}
      <AsideValues />
      <div className="flex flex-col items-center">
        <div className="flex gap-16 select-none">
          {
            randomCards.map(card =>
              <img
                key={card.id}
                draggable
                alt={card.name}
                title={card.name}
                onDragStart={(e) => handleOnDrag(e, card)}
                src={card.img}
                className="cursor-pointer h-36"
              />
            )
          }
        </div>
        <div className="flex gap-4">
          <button onClick={() => shuffleDeck()}>Barajar</button>
          <button onClick={() => checkOrder()}>Comprobar</button>
        </div>
      </div>
      <section className="flex flex-col w-[60rem] justify-center gap-1">
        <article draggable={false} onDrop={handleOnDrop1} onDragOver={handleDragOver} className={orderStyle}>
          {
            order1.map((card, index) => (
              <Card card={card} index={index} order={1} cancelDrop={cancelDrop} />
            ))
          }
        </article>
        <article draggable={false} onDrop={handleOnDrop2} onDragOver={handleDragOver} className={orderStyle}>
          {
            order2.map((card, index) => (
              <Card card={card} index={index} order={2} cancelDrop={cancelDrop} />
            ))
          }
        </article>
        <article draggable={false} onDrop={handleOnDrop3} onDragOver={handleDragOver} className={orderStyle}>
          {
            order3.map((card, index) => (
              <Card card={card} index={index} order={3} cancelDrop={cancelDrop} />
            ))
          }
        </article>
        <article draggable={false} onDrop={handleOnDrop4} onDragOver={handleDragOver} className={orderStyle}>
          {
            order4.map((card, index) => (
              <Card card={card} index={index} order={4} cancelDrop={cancelDrop} />
            ))
          }
        </article>
      </section>
    </main>
  );
}
