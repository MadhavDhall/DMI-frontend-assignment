import { motion } from "framer-motion";
import FadeInSection from "./AnimatedComponents/FadeInAnimation";
import AnimatedButton from "./AnimatedComponents/AnimatedButton";

const Hero = () => {
    return (
        <FadeInSection>
            <header className='min-h-screen relative flex flex-col items-center justify-center p-5 space-y-6 text-center bg-linear-to-br from-[#FDFCFB] to-[#F7F8F9] font-inter'>

                <motion.div
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-25 left-10 md:left-15
              w-[200px] h-[200px] 
              sm:w-[250px] sm:h-[250px] 
              md:w-[300px] md:h-[300px] 
              lg:w-[350px] lg:h-[350px]
              xl:w-[400px] xl:h-[400px]
              rounded-full bg-[radial-gradient(circle,#f8e9e9,#faf0f0)] blur-2xl z-0 motion-safe:animate-pulse"
                />

                {/* Background Circle  */}
                {/* <div class="absolute top-25 left-10 md:left-15
              w-[200px] h-[200px] 
              sm:w-[250px] sm:h-[250px] 
              md:w-[300px] md:h-[300px] 
              lg:w-[350px] lg:h-[350px]
              xl:w-[400px] xl:h-[400px]
              rounded-full bg-[radial-gradient(circle,#f8e9e9,#faf0f0)] blur-2xl z-0"></div> */}

                {/* logo starts here */}
                <div className='bg-[#cf2f25] py-8 px-5 rounded-2xl w-fit shadow-lg shadow-[#dfdfdf] z-1'>
                    <h1 className='text-white text-3xl sm:text-4xl md:text-5xl font-extrabold'>DMI</h1>
                </div>
                {/* logo ends here */}

                {/* 3 dots starts here */}
                <div className='flex flex-row items-center justify-center space-x-2 z-1 motion-safe:animate-bounce'>
                    <span className='w-3 h-3 rounded-full bg-[#de8d8a] inline-block'></span>
                    <span className='w-3 h-3 rounded-full bg-[#cf2d24] inline-block'></span>
                    <span className='w-3 h-3 rounded-full bg-[#de8d8a] inline-block'></span>
                </div>
                {/* 3 dots ends here */}

                {/* main headline starts here */}
                <h1 className='text-6xl sm:text-7xl md:text-8xl text-[#121826] font-extrabold z-1'>
                    Design Made
                    <br />
                    <span className='text-[#cf2f25] animate-bounce'>Intelligent</span>
                </h1>
                {/* main headline ends here */}

                {/* sub headline starts here */}
                <h2 className='text-xl lg:text-4xl text-[#4d5462] font-semibold'>
                    From brand kit to launch-ready content, websites & apps — powered by AI.
                </h2>
                {/* sub headline ends here */}

                {/* cta buttons starts here */}
                <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-center space-y-5 md:space-y-0 mt-8">
                    <AnimatedButton>
                        <a href="#" className="bg-[#cf2f25] text-white text-xl font-bold py-2 px-8 rounded-xl shadow-md shadow-[#d9dade] hover:bg-[#e30613]">
                            🚀 Try the Demo
                        </a>
                    </AnimatedButton>
                    <AnimatedButton>
                        <a href="#" className="bg-white text-[#3b4455] border-2 border-[#dfe1e4] text-xl font-bold py-2 px-8 rounded-xl shadow-md shadow-[#d9dade] hover:bg-[#f7f8f9] hover:text-[#121826]">
                            Join Waitlist →
                        </a>
                    </AnimatedButton>
                </div>
                {/* cta buttons ends here */}
            </header>
        </FadeInSection >
    );
};

export default Hero;