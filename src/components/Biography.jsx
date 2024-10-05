import React from 'react';
import hero1 from "../assets/hero1.png"
import bio2 from "../assets/bio2.png"
import cavas1 from "../assets/cavas1.png"
import figma1 from "../assets/figma1.png"
import adobe1 from "../assets/adobe1.png"
import {motion} from 'framer-motion'

function Biography() {
  return (
    <div id='biography' className="flex flex-col min-h-screen mt-10 pb-10 border-b-2 border-neutral-700">
      
      {/* Row 1 */}
      <div className="flex flex-col sm:flex-row flex-grow">

        {/* Column 1 */}
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 0.5}}
        className="flex-1 p-4">
          <h1 className="text-[#38b6ff] font-syne font-bold sm:text-6xl text-4xl">
            My mission is to make design easier...
          </h1>

          <div>
            <div className='flex gap-2 mt-4'>
              <img src={adobe1} alt="adobe1"  />
              <img src={cavas1} alt="cavas1" />
              <img src={figma1} alt="figma1" />
            </div>
          </div>

        </motion.div>

        {/* Column 2 */}
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{ duration: 0.5}}
        className="flex-1 p-4">
          <h1 className="text-white text-3xl mb-4 font-syne font-bold">My Biography</h1>

          <p className='text-gray-400 font-semibold leading-7'>I am a dedicated Graphic Designer with a 5 years experience in creating engaging visual communications for healthcare organizations, non-profits and private sector clients, Skilled in branding, Digital Designs, Prints and Information visualization. I have expertise in working with various graphic design tools such as Adobe Xd, Canva, Figma, Photoshop with which i use to promote health equity, disease prevention and community empowement.</p>
        </motion.div>

      </div>

      {/* Row 2 */}
      <div className="flex justify-center mt-20 items-end gap-10 flex-col sm:flex-row flex-grow">
        {/* Column 1 */}
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 0.5}}
        className="hidden sm:block">
          <h2 className="text-white ">
            <img src={hero1} alt="hero1" width={250} heigh={200} />
          </h2>
        </motion.div>
        {/* Column 2 */}
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{ duration: 0.5}}
        className="">
          <h2 className="text-white">
            <img src={bio2} alt="bio2" width={650} />
          </h2>
        </motion.div>
      </div>

    </div>
  );
}

export default Biography;
