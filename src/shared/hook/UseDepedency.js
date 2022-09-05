import { useContext } from "react"
import { DepedencyContext } from "../context/DepedencyContext"

export const useDepedency = () => {
    return useContext(DepedencyContext)
}