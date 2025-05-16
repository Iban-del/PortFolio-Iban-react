import { string } from "three/tsl";


export function classNames (...c:Array<string>){

    let classCss = ""
    classCss += c.forEach((e)=>{
        console.log(e)
        return " "+e
    })
    console.log(classCss)
    return classCss
}