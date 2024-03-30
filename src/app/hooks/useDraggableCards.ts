'use client'

import { useEffect, useState } from "react"
import { DragEvent } from "react";
import Cartas from '../../../cartas.json'

export default function useDraggableCards() {

  useEffect(() => {
    generateRandomCards()
  }, [])


  const [randomCards, setRandomCards] = useState<string[]>(['1e', '2e', '3e', '4e'])
  const [order1, setOrder1] = useState<string[]>([])
  const [order2, setOrder2] = useState<string[]>([])
  const [order3, setOrder3] = useState<string[]>([])
  const [order4, setOrder4] = useState<string[]>([])

  const generateRandomCards = () => {
    const randomSet = new Set()
    while (randomSet.size < 4) {
      const randomNumber = Math.floor(Math.random() * 40)
      randomSet.add(Cartas[randomNumber])
    }
    const randomArray = Array.from(randomSet)
    setRandomCards(randomArray)
  }

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
      const newOrder2 = order2.filter(c => c !== card)
      order === 2 && setOrder2(newOrder2)
    }
    if (order === 3) {
      const newOrder3 = order3.filter(c => c !== card)
      order === 3 && setOrder3(newOrder3)
    }
    if (order === 4) {
      const newOrder4 = order4.filter(c => c !== card)
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