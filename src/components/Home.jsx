import hero1 from "../assets/hero1.png"
import {motion} from 'framer-motion'

const Home = () => {

    const container = (delay) => ({
        hidden: { x: -100, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay},
        }
    })

  return (
    <div className="border-b-2 border-neutral-700 pb-4 lg:mb-20 max-container">
        <div className="flex flex-wrap">

            <div className="w-full lg:w-1/2">
                <div className="flex flex-col  lg:items-start">

                    <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                     className="text-white font-syne font-bold md:text-6xl text-4xl">Welcome!!! <br /> I am Mhanifest I.F</motion.h1>

                    <motion.p 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="font-semibold space-x-8 my-6 text-gray-400 leading-6">Social Media Designs require specific combination of visual appeal and clarity while sticking to other design principles, Overall, client satisfaction is a key factor and that's why as a graphic designer I design with aim to craft visual narratives that simplify complex information no matter the Organization or project, my mission is to make design easier...</motion.p>

                    <div>
                        <motion.button 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="font-semibold bg-[#38b6ff] mb-10 px-6 py-2 text-black rounded-full">
                            Discover More About Me
                        </motion.button>
                </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 lg:8">
                <div className="flex lg:ml-28 justify-center">
                    <motion.img
                    initial={{ x: 100, opacity: 0}} 
                    animate={{ x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                     src={hero1} width={380} alt="hero1" className="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home