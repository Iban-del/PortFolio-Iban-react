import { string } from "three/tsl";


export function classNames (...c:Array<string>){

    var classCss = ""
    return c.forEach((e)=>{
        classCss += e + " "
    })
    return classCss
}