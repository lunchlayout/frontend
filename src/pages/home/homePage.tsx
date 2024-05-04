import React, { useEffect, useRef, useState } from 'react'
import { IDefaultProps } from '@shared/types'
import { Button, Input, TextArea } from '@shared/ui'
import EmojiRadio from '@shared/ui/EmojiRadio'
import Progress from '../../shared/ui/Progress/progress';
import QuizOption from '@features/ui/QuizOption';
import { CommentSection } from '@features/ui';
import { Comment } from '@features/context';
import { DishInfo } from '@entities/Dish/ui';
import SearchDishesPanel from '@features/ui/SearchDishesPanel';


export default function HomePage({children}: IDefaultProps) {
  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(0);
  const refId = useRef<NodeJS.Timeout | 0>(0);
  const [comment, setComment] = useState<string>('')
  useEffect(() => {
    
    refId.current = setInterval(() => {
      setProgress(pr => {
        if (pr >= 200) {
          clearInterval(refId.current);
          return 200;
        }
        else return pr + 1
      })
    }, 100)
  }, [])
  
  return (
    <>
      <Button>Продолжить</Button>
      <Input placeholder='Найти блюдо'/>
      <TextArea placeholder='Привет' />
      <EmojiRadio checked={checked} onChange={() => setChecked(!checked)}/>
      <Progress value={progress} max={200}/>
      <QuizOption checked={checked} onChange={() => setChecked(!checked)}>Привет!</QuizOption>
      <SearchDishesPanel/>
      <Comment.Context.Provider value={{value: comment, handleChange: e => {
            setComment(e.target.value)
        }}}>
            <CommentSection/>
        </Comment.Context.Provider>
      <DishInfo description="Нежный клубничный торт - сладкая симфония ароматной клубники"
    allergens = {["Сахар"]}
    ingredients ={["Сливки", "Клубника"]}
    nutritionalValue ={{
      fats: 200,
      calories: 450,
      carbohydrates: 250,
      proteins: 50
    }}
    amount={1000}
    unit="г"
    img = "https://rsute.ru/wp-content/uploads/2020/12/maxresdefault-59.jpg"/>
    </>
  )
}