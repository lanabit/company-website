'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'

export default function Card() {
  return(
    <div>
      <div>
        <Image></Image>
      </div>
      <div>{text}</div>
    </div>
  )
}