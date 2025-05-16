import { string } from "three/tsl";


export function classNames (...c:Array<string>){

    var classCss = ""
    c.forEach((e)=>{
        classCss += e + " "
    })
    return classCss
}