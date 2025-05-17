
export function classNames (...c:Array<string>){
    var classCss = ""
    c.forEach((e)=>{classCss += e + " "})
    return classCss
}

export function sleep(ms:number){
    return new Promise(resolve => setTimeout(resolve,ms))
}