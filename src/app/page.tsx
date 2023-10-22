"use client"

export default function Home() {
  
  const handlleClickButton = () =>{
      alert("Olá funcionou o teste")
  }

  return (
   <div className="bottomClick">
      <button onClick={handlleClickButton}>Evento de Click</button>
   </div>
  )
}
