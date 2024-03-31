'use client'

import { CardType } from "../hooks/useDraggableCards"

interface CardProps {
  card: CardType,
  index: number,
  order: number,
  cancelDrop: (card: CardType, order: number) => void,
}

export default function Card({ card, index, order, cancelDrop }: CardProps) {
  return (
    <div className="relative">
      <img draggable={false} key={index} src={card.img} alt={card.name} title={card.name} className="h-36" />
      <button
        type="button"
        onClick={() => cancelDrop(card, order)}
        className="absolute -bottom-[0px] overflow-hidden left-[1px] w-full rounded-md bg-black bg-opacity-80 hover:bg-opacity-90 transition-all ease-in-out duration-200"
      >X
      </button>
    </div>
  )
}