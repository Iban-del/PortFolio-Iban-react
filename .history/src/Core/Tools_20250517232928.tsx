
export function classNames (...c:Array<string>){
    var classCss = ""
    c.forEach((e)=>{classCss += e + " "})
    return classCss
}

export async function sleep(ms:number){
    await new Promise(resolve => setTimeout(resolve,ms))
}