import { LazyMotion, domAnimation, motion } from "framer-motion";
import ApplicationHook from "../../hooks/ApplicationHook";
import { SlSizeActual } from "react-icons/sl";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const Help = () => {
    const { updateApplication } = ApplicationHook();

    return (
        <LazyMotion features={domAnimation}>
        <motion.div
            className="w-screen h-screen absolute"
            initial={{ bottom: -window.innerHeight, opacity: 0 }}
            animate={{ bottom: 0, opacity: 1 }}
            exit={{ bottom: -window.innerHeight, opacity: 0 }}
        >
            <div className="flex flex-col w-full h-screen items-center text-amber-50 bg-gray-900/50">
            <div className="sm:w-1/2 w-full bg-gray-950/75 h-screen">
                <div className="flex row-span-1 h-[57px] p-4 items-center">
                <div className="flex justify-end w-full">
                    <motion.div
                    className="cursor-pointer text-gray-900"
                    onClick={() => updateApplication("helpView", false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    >
                    <SlSizeActual color="#fff" size={30} />
                    </motion.div>
                </div>
                </div>

                <div className="h-full w-full flex justify-center p-8 ">
                {/* format pc */}
                <div className="md:flex hidden flex-col justify-start h-full">
                    <div>
                    <p>
                        Pour faire défiler la page, utilisez la molette de votre souris ou les boutons situés sur le côté droit de l'écran.
                    </p>
                    </div>
                    <div className="flex justify-center">
                    <div className="flex flex-col items-center justify-center m-10">
                        <GoArrowUp size={20} />
                        <Mouse />
                        <GoArrowDown size={20} />
                    </div>
                    <div className="flex flex-col items-center justify-center m-10">
                        <GoArrowUp size={20} />
                        <Pad />
                        <GoArrowDown size={20} />
                    </div>
                    </div>
                </div>

                {/* format téléphone */}
                <div className="md:hidden flex flex-col justify-around h-full">
                    <div>
                    <p>
                        Pour faire défiler la page, appuyez sur le haut ou le bas de la page, ou utilisez les boutons situés sur le côté droit de l'écran.
                    </p>
                    </div>
                    <div className="flex justify-center">
                    <div className="flex flex-col items-center justify-center m-10">
                        <GoArrowUp size={20} />
                        <PhoneHepl />
                        <GoArrowDown size={20} />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </motion.div>
        </LazyMotion>
    );
    };

    const Mouse = () => {
    return (
        <motion.div className="h-[180px] w-[100px] border-1 rounded-[80px]" whileHover={{ scale: 1.1 }}>
        <div className="h-2/12 flex justify-center">
            <div className="w-[1px] border-1 h-full"></div>
        </div>
        <div className="h-10/12 flex justify-center">
            <div className="w-[15px] border-1 h-[30px]">
            <motion.div className="flex flex-col justify-around h-full relative">
                <hr className="w-full h-[1px] border-1"></hr>
                <hr className="w-full h-[1px] border-1"></hr>
                <hr className="w-full h-[1px] border-1"></hr>
            </motion.div>
            </div>
        </div>
        </motion.div>
    );
    };

    const Pad = () => {
    return (
        <motion.div className="h-[180px] w-[280px] border-1 rounded-lg" whileHover={{ scale: 1.1 }}>
        {/* contenu ici */}
        </motion.div>
    );
    };

    const PhoneHepl = () => {
    return (
        <motion.div className="h-[320px] w-[280px] border-1 rounded-lg flex items-start" whileTap={{ alignItems: "end" }}>
        <motion.div className="h-[180px] w-[280px] border-1 rounded-lg" whileHover={{ scale: 1.1 }}>
            {/* contenu ici */}
        </motion.div>
        </motion.div>
    );
};

export default Help;
