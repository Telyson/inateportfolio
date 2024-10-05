import work1 from '../assets/Works 1.png'
import work2 from '../assets/Works 2.png'
import work3 from '../assets/Works 3.png'
import work4 from '../assets/Works 4.png'
import work5 from '../assets/Works 5.png'
import work6 from '../assets/Works 6.png'
import work7 from '../assets/Works 7.png'
import work8 from '../assets/Works 8.png'
import {motion} from 'framer-motion'

const Projects = () => {
    const iconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    });

  return (
    <section id='project' className='pb-10 border-b-2 border-neutral-700'>

        <div>
        <h1 className='text-white text-3xl mb-8 font-syne text-center font-bold mt-16'>Selected Projects</h1>
        </div>

        <div className="grid pb-10 text-white grid-cols-1 sm:grid-cols-3 gap-20">

            <div>
                <motion.img
                 variants={iconVariants(2.5)}
                 initial="initial"
                 animate="animate"
                 src={work1} alt="work1" />
            </div>

            <div>
                <motion.img
                 variants={iconVariants(3)}
                 initial="initial"
                 animate="animate" src={work2} alt="work2" />
            </div>

            <div>
                <motion.img
                 variants={iconVariants(3.5)}
                 initial="initial"
                 animate="animate" src={work3} alt="work3" />
            </div>
        </div>

        
        <div className="grid pb-10 text-white grid-cols-1 sm:grid-cols-2 gap-20">

            <div>
                <img src={work4} alt="work4" />
            </div>

            <div>
                <img src={work5} alt="work5" />
            </div>
        </div>

        
        <div className="grid pb-10 text-white grid-cols-1 sm:grid-cols-3 gap-20">

            <div>
                <motion.img
                 variants={iconVariants(3.5)}
                 initial="initial"
                 animate="animate" src={work6} alt="work6" />
            </div>

            <div>
                <motion.img
                 variants={iconVariants(3)}
                 initial="initial"
                 animate="animate" src={work7} alt="work7" />
            </div>

            <div>
                <motion.img
                 variants={iconVariants(2.5)}
                 initial="initial"
                 animate="animate" src={work8} alt="work8" />
            </div>
        </div>

    </section>
  )
}

export default Projects