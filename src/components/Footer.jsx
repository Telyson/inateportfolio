import Subtract from '../assets/Subtract-white.png'
import twitter from '../assets/x-social-media-white-icon.png'
import instagram from '../assets/instagram-white-icon.png'
import discord from '../assets/discord-white-icon.png'
import facebook from '../assets/facebook-app-round-white-icon.png'

const Footer = () => {
  return (
    <section className='max-container'>
        <div className='mt-6'>
            <p className='text-[#38b6ff] mb-6 text-2xl text-center'>Get in Touch</p>

            <h2 className='font-syne text-white text-2xl text-center'>felman.int@gmail.com</h2>
        </div>

        <div className='flex text-white flex-wrap flex-col gap-4 sm:flex-row sm:justify-between items-center pb-10 border-b-2 border-neutral-700 mt-14'>
             <div>
                 <img src={Subtract} alt="Subtract" width={70} />
             </div>
             <div>
                 <h2>Ojo, Lagos State <br /> Nigeria</h2>
             </div>
             <div>
                 <p  className='mb-2'>+23(4)9046373440</p>

                 <div className='flex justify-center items-center gap-3'>

                    <div>
                        <a href="https://www.facebook.com/inate.felix?mibextid=ZbWKwL">
                            <img src={facebook} alt="facebook" width={20} />
                        </a>
                    </div>

                    <div>
                        <a href="https://x.com/InateFelix?t=IdxBdcsvyiHbE5AOehhtlw&s=09">
                            <img src={twitter} alt="twitter" width={20} className='font-white' />
                        </a>
                    </div>

                    <div>
                        <a href="https://www.instagram.com/inatefelix?igsh=OGQ5ZDc2ODk2ZA==">
                            <img src={instagram} alt="instagram" width={20} />
                        </a>
                    </div>

                    <div>
                        <a href="http://discordapp.com/users/889819218374164490">
                            <img src={discord} alt="discord" width={20} />
                        </a>
                    </div>
                 </div>

                 {/* <img src={frame5} alt="frame5" /> */}
             </div>
         </div>

         <p className='text-white text-center p-10 font-syne font-semibold'>&copy; 2024 All rights reserved.</p>
        
    </section>
  )
}

export default Footer



// import Subtract from '../assets/Subtract-black.png'

// const Footer = () => {
//   return (
//     <Footer className="">
//         <p className='text-[#38b6ff] text-2xl text-center'>Get in Touch</p>
//         <h2 className='font-syne text-4xl mt-6 mb-32 text-center'>felman.int@gmail.com</h2>

//         <div className='flex flex-col sm:justify-between items-center pb-10 border-b-2 border-neutral-700 mt-14'>
//             <div>
//                 <img src={Subtract} alt="Subtract" />
//             </div>
//             <div>
//                 <h2>Ojo, Lagos State <br /> Nigeria</h2>
//             </div>
//             <div>
//                 <p>+23(4)9046373440</p>
//             </div>
//         </div>

//         <p className='text-white text-center font-syne font-semibold'>&copy; 2024 All rights reserved.</p>

//     </Footer>
//   )
// }

// export default Footer