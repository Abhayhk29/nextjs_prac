"use client"
import { serVerSideFunction } from "@/utils/server-utils"

const ClientRoute = () => {
    const result = serVerSideFunction();
  return (
    <div>ClientRoute {result}</div>
  )
}

export default ClientRoute