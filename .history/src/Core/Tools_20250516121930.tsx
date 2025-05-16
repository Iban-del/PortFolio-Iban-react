import { string } from "three/tsl";


export function classNames (...c:Array<string>){

    let classCss = " "+ c.map((e)=> e)
    console.log(classCss)
    return classCss
}