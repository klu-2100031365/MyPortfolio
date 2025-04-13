import { motion } from "framer-motion";
import sports from "../assets/skills/play.jpeg";
import doctor from "../assets/skills/doctorss.jpeg";
import movie from "../assets/skills/kl.png";
import tictactoe from "../assets/skills/xo.jpeg";

// Projects data
const projects = [
  {
    title: "TimeToPlay – Sports Booking App",
    description:
      "A full-stack app to book courts for cricket, badminton, and tennis. Features real-time booking and secure login for customers and admins.",
    image: sports,
    github: "https://github.com/klu-2100031365/sport-booking-frontend",
    demo: "https://sport-booking-frontend.vercel.app/",
  },
  {
    title: "Doctor Appointment Booking",
    description:
      "Learning project focused on frontend using React ,purely YT based. Features separate dashboards for patients and admins with booking history and appointment tracking.",
    image: doctor,
    github: "https://github.com/klu-2100031365/DoctorApp",
    demo: "https://klu-2100031365.github.io/DoctorApp/",
  },
  {
    title: "My Clg CRT Attendance Calculator",
    description:
      "Simple HTML/CSS/JS tool to calculate attendance based on total classes, holidays, and absences.Includes dynamic percentage calculation and real-time updates as inputs change.",
    image: movie,
    github: "https://github.com/klu-2100031365/my-clg-crt-attendance",
    demo: "https://klu-2100031365.github.io/my-clg-crt-attendance/",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A classic Tic Tac Toe game built with React.js. Designed to improve interactive UI building skills while learning state management and game logic.",
    image: tictactoe,
    github: "https://github.com/klu-2100031365/tic-tac-toe-react",
    demo: "https://klu-2100031365.github.io/tic-tac-toe-react/",
  },
];

// Framer Motion Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 text-white ">
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={fadeInUp}
      >
        My Projects
      </motion.h2>

      <div className="space-y-20 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full sm:w-3/4 lg:w-1/4 rounded-xl shadow-xl object-cover max-h-64"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />

            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-base text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-blue-500 transition"
                >
                  GitHub Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
