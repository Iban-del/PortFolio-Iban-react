const defaultSize = 1920*1080;
const minScale = 0.9

export const getScale = (size:number) =>{
    const percentage =  (size * 100 / defaultSize)/100;
    return percentage < 0.5 ? 0.5 : percentage
}
