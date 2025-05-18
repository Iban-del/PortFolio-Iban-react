import type { JSX } from "react"


export type Props = {
    children?: string | JSX.Element | JSX.Element[]
}

export type Context = {
    children?: string | JSX.Element | JSX.Element[]
}

export interface StateContextInterface{
    state:number,
    setState:(c:number)=>void
}