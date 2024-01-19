'use client'

import { usePathname } from "next/navigation"
import React from "react"

export default function HeadTitle() {
  const pathname = usePathname()
  
  if(pathname === '/') return <title>TermErl /</title>
  else if(pathname === '/document') return <title>TermErl ~/document</title>

}
