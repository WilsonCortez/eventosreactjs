"use client"

import { CustomButtom } from "./components/CustomButtom"


export default function Home() {
  
  const handlleClickButton1 = () =>{
      alert("Olá funcionou o teste 1")
  }
  const handlleClickButton2 = () =>{
    alert("Olá funcionou o teste 2")
  }
  const handlleClickButton3 = () =>{
    alert("Olá funcionou o teste 3")
  }

  return (
   <>
    <CustomButtom label="Click 1" onclick={handlleClickButton1} />
    <CustomButtom label="Click 2" onclick={handlleClickButton2} />
    <CustomButtom label="Click 3" onclick={handlleClickButton3} />
   </>
  )
}
