import hero1 from "../assets/hero1.png"
const Hero = () => {
  return (
    <section className="flex w-full xl:flex-row flex-col gap-10 justify-center min-h-screen max-container">

        <div className="xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

            <h1 className="text-white font-syne font-bold md:text-6xl text-4xl">
                Welcome!!! <br /> I am Mhanifest I.F
            </h1>

            <p className="font-semibold space-x-2 my-4 text-gray-200">Social Media Designs require specific combination of visual appeal and clarity while sticking to other design principles, Overall, client satisfaction is a key factor and that's why as a graphic designer I design with aim to craft visual narratives that simplify complex information no matter the Organization or project, my mission is to make design easier...</p>

            <div>
                <button className="font-semibold bg-[#38b6ff] px-8 py-3 text-black rounded-full">
                    Discover More About Me
                </button>
            </div>

        </div>

        <div className="xl:w-2/5">
            <img src={hero1} alt="hero1" width={400} height={595} />
        </div>

    </section>
  )
}

export default Hero