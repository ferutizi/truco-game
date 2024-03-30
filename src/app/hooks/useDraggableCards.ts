'use client'

import { useEffect, useState } from "react"
import { DragEvent } from "react";
import Cartas from '../../../cartas.json'

export type CardType = {
  id: string,
  name: string,
  img: string,
  value: number
}

export default function useDraggableCards() {

  useEffect(() => {
    generateRandomCards()
  }, [])


  const [randomCards, setRandomCards] = useState<CardType[]>([])
  const [order1, setOrder1] = useState<CardType[]>([])
  const [order2, setOrder2] = useState<CardType[]>([])
  const [order3, setOrder3] = useState<CardType[]>([])
  const [order4, setOrder4] = useState<CardType[]>([])

  const generateRandomCards = () => {
    const randomSet: Set<CardType> = new Set()
    while (randomSet.size < 4) {
      const randomNumber = Math.floor(Math.random() * 40)
      randomSet.add(Cartas[randomNumber])
    }
    const randomArray: CardType[] = Array.from(randomSet)
    setRandomCards(randomArray)
  }

  const handleOnDrag = (e: DragEvent<HTMLImageElement>, carta: CardType) => {
    console.log('dragStart')
    e.dataTransfer.setData("carta", carta.id)
  }

  const handleOnDrop1 = (e: React.DragEvent) => {
    const id = e.dataTransfer.getData("carta")
    const cardToAdd = randomCards.filter(c => c.id === id)
    setOrder1([...order1, ...cardToAdd])
    const newCards = randomCards.filter(c => c.id !== id)
    setRandomCards(newCards)
  }

  const handleOnDrop2 = (e: React.DragEvent) => {
    const id = e.dataTransfer.getData("carta")
    const cardToAdd = randomCards.filter(c => c.id === id)
    setOrder2([...order2, ...cardToAdd])
    const newCards = randomCards.filter(c => c.id !== id)
    setRandomCards(newCards)
  }

  const handleOnDrop3 = (e: React.DragEvent) => {
    const id = e.dataTransfer.getData("carta")
    const cardToAdd = randomCards.filter(c => c.id === id)
    setOrder3([...order3, ...cardToAdd])
    const newCards = randomCards.filter(c => c.id !== id)
    setRandomCards(newCards)
  }

  const handleOnDrop4 = (e: React.DragEvent) => {
    const id = e.dataTransfer.getData("carta")
    const cardToAdd = randomCards.filter(c => c.id === id)
    setOrder4([...order4, ...cardToAdd])
    const newCards = randomCards.filter(c => c.id !== id)
    setRandomCards(newCards)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const cancelDrop = (card: CardType, order: number) => {
    const newCards = [...randomCards, card]
    setRandomCards(newCards)
    if (order === 1) {
      const newOrder1 = order1.filter(c => c.id !== card.id)
      order === 1 && setOrder1(newOrder1)
    }
    if (order === 2) {
      const newOrder2 = order2.filter(c => c.id !== card.id)
      order === 2 && setOrder2(newOrder2)
    }
    if (order === 3) {
      const newOrder3 = order3.filter(c => c.id !== card.id)
      order === 3 && setOrder3(newOrder3)
    }
    if (order === 4) {
      const newOrder4 = order4.filter(c => c.id !== card.id)
      order === 4 && setOrder4(newOrder4)
    }
  }

  return [
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
  ] as const
}