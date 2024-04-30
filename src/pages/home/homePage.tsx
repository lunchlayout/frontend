import React, { useEffect, useRef, useState } from 'react'
import { IDefaultProps } from '@shared/types'
import { Button, Input, TextArea } from '@shared/ui'
import EmojiRadio from '@shared/ui/EmojiRadio'
import Progress from '../../shared/ui/Progress/progress';


export default function HomePage({children}: IDefaultProps) {
  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(0);
  const refId = useRef<NodeJS.Timeout | 0>(0);
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
    </>
  )
}