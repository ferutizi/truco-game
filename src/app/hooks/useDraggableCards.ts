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

  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)

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

  const checkOrder = () => {
    let winGame = true
    let value1 = order1[0] ? order1[0].value : 0
    let value2 = order2[0] ? order2[0].value : 0
    let value3 = order3[0] ? order3[0].value : 0
    let value4 = order4[0] ? order4[0].value : 0
    order1.forEach(e => value1 !== e.value ? winGame = false : null)
    order2.forEach(e => value2 !== e.value ? winGame = false : null)
    order3.forEach(e => value3 !== e.value ? winGame = false : null)
    order4.forEach(e => value4 !== e.value ? winGame = false : null)
    if (value1 <= value2 || value2 <= value3 || value3 <= value4) winGame = false
    if (randomCards[0]) winGame = false
    finishGame(winGame)
  }

  const finishGame = (win: boolean) => {
    if (win) {
      console.log('win')
      setWin(true)
      setLose(false)
    } else {
      console.log('lose')
      setLose(true)
      setWin(false)
    }
  }

  return [
    randomCards,
    order1,
    order2,
    order3,
    order4,
    win,
    lose,
    generateRandomCards,
    handleOnDrag,
    handleOnDrop1,
    handleOnDrop2,
    handleOnDrop3,
    handleOnDrop4,
    handleDragOver,
    cancelDrop,
    checkOrder
  ] as const
}