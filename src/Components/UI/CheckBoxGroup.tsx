import { AnimatePresence } from "motion/react"
import { useMemo, useRef } from "react"

export interface inputInterface{
    title:string,
    onChange:()=>void
}

export interface CheckBoxGroupInterface{
    checkBoxList:Array<inputInterface>,
    defaultState?:boolean
}

const CheckBoxGroup = ({
    checkBoxList,
    defaultState = false
}:CheckBoxGroupInterface) =>{

    const ulRef =useRef(null)

    const list = useMemo(()=>{
        return checkBoxList.map((ch)=>{
            return (
                <li key={ch.title} className="border-b border-t border-gray-300  ">
                    <div className="flex items-center ps-3">
                        <input type="checkbox" onChange={ch.onChange} className="w-4 h-4 rounded-sm" defaultChecked={defaultState}/>
                        <label className="w-full py-3 ms-2 text-sm font-medium ">{ch.title}</label>
                    </div>
                </li>
            )
        })
    },[])

    return (
        <ul ref={ulRef} className="items-center w-full text-sm font-medium justify-center  rounded-lg flex ">
            
            {list}
            
        </ul>
    )
}

export default CheckBoxGroup