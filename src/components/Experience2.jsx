import {motion} from 'framer-motion'

const Experience2 = () => {
  return (
    <section id="experience" className="pb-10 border-b-2 border-neutral-700">
        <div>
            <h1 className='text-white text-3xl mb-8 font-syne font-bold mt-16'>Experience</h1>
        </div>

        <div className="grid pb-10 text-white grid-cols-1 sm:grid-cols-2 gap-20">

            <motion.div whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 0.5}} className="flex-1 bg-slate-800  p-4 border rounded-3xl shadow-slate-400 leadin-7">

                <p className='text-gray-400'><span className='font-semibold'>Name: </span>Cerebrum Dao</p>

                <p className='text-gray-400'><span className='font-semibold'>Project Role: </span>Contributor (Graphic Designer)</p>

                <p className='text-gray-400'><span className='font-semibold'>Year: </span>2024 - Till Present</p>

                <p className='text-gray-400'><span className='font-semibold'>Description: </span>Web3</p>

                <p className='text-gray-400'><span className='font-semibold'>Scope of the project: </span>Monthly Design Projects, Even Announcement Designs, Monthly Report Updates, Token Launch Updates etc.</p>

            </motion.div>

            <motion.div whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{ duration: 0.5}} className="flex-1 bg-slate-800  p-4 border rounded-3xl shadow-slate-400 leadin-7">

                <p className='text-gray-400'><span className='font-semibold'>Name: </span>DevOps</p>

                <p className='text-gray-400'><span className='font-semibold'>Project Role: </span>Brand Designer</p>

                <p className='text-gray-400'><span className='font-semibold'>Year: </span>2023</p>

                <p className='text-gray-400'><span className='font-semibold'>Description: </span>Private</p>

                <p className='text-gray-400'><span className='font-semibold'>Scope of the project: </span>Brand Visualiztion, Brand Design, Guideline Application And Launch</p>

            </motion.div>

            <motion.div whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{ duration: 0.5}} className="flex-1 bg-slate-800  p-4 border rounded-3xl shadow-slate-400 leadin-7">

                <p className='text-gray-400'><span className='font-semibold'>Name: </span>Meek Studio</p>

                <p className='text-gray-400'><span className='font-semibold'>Project Role: </span>UI Designer</p>

                <p className='text-gray-400'><span className='font-semibold'>Year: </span>2023</p>

                <p className='text-gray-400'><span className='font-semibold'>Description: </span>Private</p>

                <p className='text-gray-400'><span className='font-semibold'>Scope of the project: </span>Landing Page Designer</p>

            </motion.div>

            <motion.div whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 0.5}} className="flex-1 bg-slate-800  p-4 border rounded-3xl shadow-slate-400 leadin-7 ">

                <p className='text-gray-400'><span className='font-semibold'>Name: </span>Apparet</p>

                <p className='text-gray-400'><span className='font-semibold'>Project Role: </span>Brand Designer</p>

                <p className='text-gray-400'><span className='font-semibold'>Year: </span>2023</p>

                <p className='text-gray-400'><span className='font-semibold'>Description: </span>Private</p>

                <p className='text-gray-400'><span className='font-semibold'>Scope of the project: </span>Brand Ideation and Visualiztion, Brand Design, Guideline Application and Launch</p>

            </motion.div>

        </div>
    </section>
  )
}

export default Experience2