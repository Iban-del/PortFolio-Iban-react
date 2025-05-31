import { string } from "three/tsl";


export function classNames (...c:Array<string>){

    let classCss = ""
    c.forEach((e)=>{
        classNames += e
    })
    console.log(classCss)
    return classCss
}