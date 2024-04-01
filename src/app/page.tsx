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
  const loseStyle = "border border-red-600"
  const orderStyle = `flex justify-center relative items-center gap-4 bg-green-950 border h-40 select-none rounded-md drop-shadow-custom ${win && winStyle} ${lose && loseStyle}`
  const tableStyle = "text-4xl opacity-50 absolute -left-14 -rotate-90 border-b w-40 text-center pb-[3px]"

  return (
    <main className="flex h-screen flex-col justify-around items-center p-12" >
      <AsideValues />
      <div className="flex flex-col items-center">
        <div className="flex gap-16 select-none h-36">
          {
            randomCards.map(card =>
              <img
                key={card.id}
                draggable
                alt={card.name}
                title={card.name}
                onDragStart={(e) => handleOnDrag(e, card)}
                src={card.img}
                className="cursor-pointer h-36 hover:opacity-70 drop-shadow-custom transition-all ease-in duration-200"
              />
            )
          }
        </div>
        <div className="flex gap-4">
          <button onClick={() => shuffleDeck()} className="border py-1 px-2 rounded-md my-4 hover:bg-green-950 transition-all ease-in duration-200">
            <img src="/cartas.png" alt="barajar" title="barajar" className="h-10" />
          </button>
          <button onClick={() => checkOrder()} className="border py-1 px-2 rounded-md my-4 hover:bg-green-950 transition-all ease-in duration-200">Comprobar</button>
        </div>
      </div>
      <section className="flex flex-col w-[60rem] justify-center">
        <article draggable={false} onDrop={handleOnDrop1} onDragOver={handleDragOver} className={orderStyle}>
          <p className={tableStyle}>1</p>
          {
            order1.map((card, index) => (
              <Card card={card} index={index} order={1} cancelDrop={cancelDrop} />
            ))
          }
        </article>
        <article draggable={false} onDrop={handleOnDrop2} onDragOver={handleDragOver} className={orderStyle}>
          <p className={tableStyle}>2</p>
          {
            order2.map((card, index) => (
              <Card card={card} index={index} order={2} cancelDrop={cancelDrop} />
            ))
          }
        </article>
        <article draggable={false} onDrop={handleOnDrop3} onDragOver={handleDragOver} className={orderStyle}>
          <p className={tableStyle}>3</p>
          {
            order3.map((card, index) => (
              <Card card={card} index={index} order={3} cancelDrop={cancelDrop} />
            ))
          }
        </article>
        <article draggable={false} onDrop={handleOnDrop4} onDragOver={handleDragOver} className={orderStyle}>
          <p className={tableStyle}>4</p>
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
