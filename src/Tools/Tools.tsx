
/**
 * permet de retourner les class css avec des condition
 * @param className 
 * @returns string
 */
export const classNames = (className:string,conditionClassName:string = "") => {
    return className+" "+conditionClassName;
}