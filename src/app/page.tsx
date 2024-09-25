import Botao from "@/components/Botao";
import { useState } from "react";



export default function Home() {
  return (
    <div className="flex gap-2">
      <Botao label="Salvar" />
      <Botao label="Cancelar"/>
    </div>
  )
}