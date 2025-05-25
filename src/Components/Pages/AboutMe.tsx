import { AnimatePresence, motion } from "motion/react"


const AboutMe = () =>{

    

    return (
        <div className="p-4 flex flex-col justify-center items-center">
            <div className="h-[20%]">
                <h4 className="text-2xl font-bold">A Propos de moi</h4>
            </div>
            <div className="flex justify-center text-center items-center  mt-7">
                <motion.p initial={{ opacity: 0 }} whileInView={{opacity:1}}>
                    Actuellement âgé de 18 ans, je suis développeur d'applications chez Network Informatique et étudiant en classe de terminale.
                    Passionné par le développement et les nouvelles technologies, je suis en apprentissage constant. Curieux et motivé, je m'efforce de découvrir et de maîtriser en continu de nouveaux outils, langages et environnements de développement.
                    À travers ce portfolio, je partage mes projets et expérimentations, fruits de ma progression et de ma passion pour la tech.
                </motion.p>
            </div>
        </div>
    )

}

export default AboutMe