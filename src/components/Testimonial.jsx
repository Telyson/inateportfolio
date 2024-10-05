import comma from '../assets/comma.png'
import {motion} from 'framer-motion'

const Testimonial = () => {
  return (
    <section id='testimonial' className='pb-10 border-b-2 border-neutral-700 mt-14'>

        <div className="flex text-white justify-center items-center gap-20">
            <div className=''>
                <h1 className='text-5xl font-bold'>Testimonial</h1>
                <motion.p  
                whileInView={{ opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{ duration: 0.5}}
                className='text-gray-400 mt-16 mb-16 font-semibold'>
                    Mhanifest was very interesting to work with, started by guiding my thought process on the best Design type for my brand and also committed to mae sure the brand got the best presentation posisble, Personally I believe it was not only the on time hours that mattered but the work done behind work hours which shows his undying commitment to ensuring his client gets the representation possible. I will also give him an extra rating for the readiness to think outside the box, I call it "The Craziness Aspect", the readiness to give in 100% just for customer satisfaction...
                </motion.p>
                <h3 className='text-2xl font-semibold'>Sammy Fyneface</h3>
            </div>

            <div className='hidden sm:block'>
                <img src={comma} alt="comma" width={650} />
            </div>
        </div>
    </section>
  )
}

export default Testimonial