import { string } from "three/tsl";


export function classNames (...c:Array<string>){

    var classCss = ""
    c.forEach((e)=>{
        classCss += e
    })
    console.log(classCss)
    return classCss
}