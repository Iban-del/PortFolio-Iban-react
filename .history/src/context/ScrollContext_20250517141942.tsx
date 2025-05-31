import { createContext, useState } from "react";
import type { Props } from "../Core/GenericType";


export const scrollContext = createContext<number>(1);

export const ScrollProvider = ({children}:Props) =>{
    const [state,setState] = useState<number>(0)
}