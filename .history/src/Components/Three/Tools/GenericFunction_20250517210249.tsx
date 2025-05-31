

export const getScale = (size:number) =>{
    const percentage =  (size * 100 / defaultSize)/100;
    return percentage < 0.5 ? 0.5 : percentage
}
