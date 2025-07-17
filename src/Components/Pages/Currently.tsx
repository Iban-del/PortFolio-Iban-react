import { AnimatePresence } from "motion/react"
import { useMemo, type JSX } from "react"
import Card from "../UI/Card"
import { IoIosInformationCircle } from "react-icons/io";


interface CurrentlyInterface {
    title:string,
    content:JSX.Element|string,
    usePopUp:boolean
    popUpContent?:string,
}

const Currently = () =>{

    const cardSize = [100,300]
    const currently:Array<CurrentlyInterface> = [
        {
            title: "Entreprise",
            usePopUp:true,
            content: "Network Informatique",
            popUpContent: "Network Informatique est une entreprise spécialisée dans les infrastructures réseau et le développement d'application, offrant des solutions personnalisées pour assurer la sécurité, la performance et la maintenance des systèmes informatiques de ses clients."
        },
        {
            title: "Niveau",
            content: "Terminal",
            usePopUp:false,
        }

    ]

    const currentlyList = useMemo(()=>{
        const list:Array<JSX.Element> = []
        currently.forEach(currently => {
            list.push(
                <div key={currently.title+"-d-c"} className="flex justify-center items-center">
                    <Card usePopUp={currently.usePopUp} popUpContent={currently.popUpContent} popUpIcon={<IoIosInformationCircle />}  key={currently.title} size={cardSize} title={currently.title} >{currently.content}</Card>
                </div>
            )
        })
        return list
    },[])

    return (
        <div className="p-4 h-full flex flex-col justify-evenly items-center ">
            <div className="h-[10%]">
                <h4 className="text-4xl font-bold">ACTUELLEMENT</h4>
            </div>
            <div className="h-[100px] "></div>
            <div className="h-[90%] w-full mb-7 flex flex-col justify-between">
                <div className="w-full flex justify-center mb-7">
                    <div className="grid sm:grid-cols-2 content-middle grid-cols-1 sm:gap-10 gap-4 w-full ">
                        <AnimatePresence>
                            {currentlyList}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Currently