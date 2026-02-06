import { motion } from 'framer-motion'
import nate1 from '../assets/nate1.png'
import nate2 from '../assets/nate2.png'
import nate3 from '../assets/nate3.png'

const Experience2 = () => {
  return (
    <section
      id='experience'
      className='pb-10 max-container border-b-2 border-neutral-700'
    >
      <div>
        <h1 className='text-white text-3xl mb-8 font-syne font-bold mt-16'>
          Experience
        </h1>
      </div>

      <div className='grid pb-10 text-white grid-cols-1 sm:grid-cols-2 gap-20'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='flex-1 bg-slate-800  p-4 border rounded-3xl shadow-slate-400 leadin-7'
        >
          <p className='text-gray-400'>
            <span className='font-semibold'>Name: </span>MicroDao
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Project Role: </span>Community
            Manager & Designer
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Year: </span>2024 - Till Present
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Description: </span>Web3, Discord,
            Telegram, X
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Scope of the project: </span>Create
            and execute content strategy and Design, Execute onboarding
            processes, Campaigns, Track Metrics and Collaboration
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='flex-1 bg-slate-800  p-4 border rounded-3xl shadow-slate-400 leadin-7'
        >
          <p className='text-gray-400'>
            <span className='font-semibold'>Name: </span>Larissa.Health
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Project Role: </span>Community
            Manager & Designer
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Year: </span>2025
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Description: </span>Discord
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Scope of the project: </span>Create
            and execute content strategy and Design, Build Engagements
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='flex-1 bg-slate-800  p-4 border rounded-3xl shadow-slate-400 leadin-7'
        >
          <p className='text-gray-400'>
            <span className='font-semibold'>Name: </span>Oreal’s Cuisine
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Project Role: </span>SMM
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Year: </span>2023
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Description: </span>
            Private(Facebook)
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Scope of the project: </span>
            Marketing Campaigns, Page Growth and Foster Engagements
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='flex-1 bg-slate-800  p-4 border rounded-3xl shadow-slate-400 leadin-7 '
        >
          <p className='text-gray-400'>
            <span className='font-semibold'>Name: </span>Apparet
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Project Role: </span>Brand Designer
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Year: </span>2022
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Description: </span>Private
          </p>

          <p className='text-gray-400'>
            <span className='font-semibold'>Scope of the project: </span>Brand
            Ideation and Visualization, Brand Design, Guideline Application and
            Launch
          </p>
        </motion.div>
      </div>

      <div className='flex justify-center items-center gap-4 mt-4 flex-col sm:flex-row'>
        <img src={nate1} alt={nate1} width={350} />
        <img src={nate2} alt={nate2} width={350} />
        <img src={nate3} alt={nate3} width={350} />
        {/* <img src='../assets/nate4.png' alt='' /> */}
      </div>
    </section>
  )
}

export default Experience2
