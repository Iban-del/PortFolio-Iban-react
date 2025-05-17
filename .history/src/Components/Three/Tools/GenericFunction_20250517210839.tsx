const defaultSize = 1920*1080;
const minScale = 0.6

export const getScale = (size:number) =>{
    const percentage =  (size * 100 / defaultSize)/100;
    return percentage < minScale ? minScale : percentage
}
