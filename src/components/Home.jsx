import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/img8.jpg.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Framer animation variants
const leftSlideVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const rightSlideVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const [typing, setTyping] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ["Full Stack Developer", "Cloud Engineer"];

  useEffect(() => {
    const title = titles[currentTitleIndex];
    const typingSpeed = 130;
    const interval = setInterval(() => {
      if (typing.length < title.length) {
        setTyping((prev) => prev + title[prev.length]);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTyping("");
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 1000);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [typing, currentTitleIndex]);

  return (
    <motion.div id="home" className="pb-4 lg:mb-36">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section - Slide from Left */}
        <motion.div
  className="w-full lg:w-3/7 flex justify-center lg:justify-start pl-6 mt-8"
  variants={leftSlideVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
>
  <img
    src={profilePic}
    alt="Sudeep Varma"
    className="border border-gray-300 rounded-4xl w-[24rem] sm:w-[28rem] h-auto mx-auto"
  />
</motion.div>


        {/* Text Section - Slide from Right */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-between items-center lg:items-start mt-10 lg:mt-20"
          variants={rightSlideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-2xl text-white">Hello.. I'm</h3>
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl text-white">
              Sudeep Varma
            </h2>

            {/* Typing Effect - Fixed width to prevent shifting */}
            <div className="flex justify-center lg:justify-start h-[2.5rem] w-full">
              <div className="min-w-[18ch] text-center lg:text-left">
                <span
                  className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent inline-block"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {typing || "\u00A0"}
                </span>
              </div>
            </div>

            <p className="my-4 text-lg text-center lg:text-left text-white px-4 lg:px-0">
              I’m a passionate and dedicated Full Stack Web Developer with a strong foundation in both frontend
              and backend technologies. I’m also proficient in Cloud Computing, enabling me to build scalable and 
              reliable applications from end to end. With hands-on experience in modern frameworks, APIs, and cloud platforms,
              I love turning ideas into seamless, user-friendly digital experiences. I’m always eager to learn, explore new tools,
              and deliver impactful solutions through technology.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mt-4">
              <a
                href="/Sudeep.pdf"
                download="Sudeep.pdf"
                className="bg-white text-black py-4 px-2 rounded-full text-lg font-bold tracking-tight transform transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-600 hover:shadow-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Download Resume
              </a>

              <div className="flex gap-6 mt-4 lg:mt-0">
                <a
                  href="https://www.linkedin.com/in/datla-sudeep-varma-177028226"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white text-3xl sm:text-4xl md:text-5xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/klu-2100031365"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-white text-3xl sm:text-4xl md:text-5xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
