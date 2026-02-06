import React from 'react'
import hero1 from '../assets/hero1.png'
import bio2 from '../assets/bio2.png'
import cavas1 from '../assets/cavas1.png'
import figma1 from '../assets/figma1.png'
import adobe1 from '../assets/adobe1.png'
import black2 from '../assets/Black2.png'
import black1 from '../assets/Black1.png'
import google from '../assets/google-icon.png'
import notion from '../assets/Notion_app_logo.png'
import photoshop from '../assets/adobe-photoshop-icon.png'
import { motion } from 'framer-motion'

function Biography() {
  return (
    <div
      id='biography'
      className='flex max-container flex-col min-h-screen mt-10 pb-10 border-b-2 border-neutral-700'
    >
      {/* Row 1 */}
      <div className='flex flex-col sm:flex-row flex-grow'>
        {/* Column 1 */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='flex-1 p-4'
        >
          <h1 className='text-[#38b6ff] font-syne font-bold sm:text-6xl text-4xl'>
            First connection before growth; because communities don’t scale on
            numbers, they scale on trust
          </h1>

          <div>
            <div className='flex gap-2 mt-4'>
              <img src={adobe1} alt='adobe1' />
              <img src={cavas1} alt='cavas1' />
              <img src={figma1} alt='figma1' />
              <img src={google} alt='figma1' width={50} />
              <img src={notion} alt='figma1' width={50} />
              <img src={photoshop} alt='photoshop' width={50} />
            </div>
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='flex-1 p-4'
        >
          <h1 className='text-white text-3xl mb-4 font-syne font-bold'>
            My Biography
          </h1>

          <p className='text-gray-400 font-semibold leading-7'>
            Community Manager with a strong design background, helping
            organizations turn audiences into engaged communities. With 5+ years
            of experience across healthcare, non-profits, and private sector
            projects, I build onboarding systems, engagement campaigns, and
            visual narratives that drive participation and impact through the
            use Notion, Discord, Figma, Canva, Adobe XD, and Photoshop. My
            solution to building community is simple: “First connection before
            growth; because communities don’t scale on numbers, they scale on
            trust.
          </p>
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className='flex justify-center mt-20 items-end gap-10 flex-col sm:flex-row flex-grow'>
        {/* Column 1 */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='hidden sm:block'
        >
          <h2 className='text-white '>
            <img src={black2} alt='black2' width={180} height={200} />
          </h2>
        </motion.div>
        {/* Column 2 */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className=''
        >
          <h2 className='text-white'>
            <img src={black1} alt='black1' width={410} height={200} />
          </h2>
        </motion.div>
      </div>
    </div>
  )
}

export default Biography
