// src/components/Skills.jsx
import { motion } from "framer-motion";
import javascript from "../assets/skills/javascript.png";
import java from "../assets/skills/java.png";
import c from "../assets/skills/c.png";
import mysql from "../assets/skills/sql.png";
import mongodb from "../assets/skills/mongodb.jpg";
import reactLogo from "../assets/skills/react.png";
import nodejs from "../assets/skills/nodejs.png";
import springboot from "../assets/skills/spring.png";
import tailwind from "../assets/skills/tailwindcss.png";
import github from "../assets/skills/github.png";
import aws from "../assets/skills/aws.png";

const skills = [
  {
    category: "Programming Languages",
    items: [
     
      { name: "Java", logo: java },
      { name: "C", logo: c },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", logo: mysql },
      { name: "MongoDB", logo: mongodb },
    ],
  },
  {
    category: "Full Stack Technologies",
    items: [
      { name: "React", logo: reactLogo },
      { name: "Node.js", logo: nodejs },
      { name: "Spring Boot", logo: springboot },
      { name: "Tailwind CSS", logo: tailwind },
      { name: "JavaScript", logo: javascript },
    ],
  },
  {
    category: "Platform & Cloud Services",
    items: [
      { name: "GitHub", logo: github },
      { name: "AWS", logo: aws },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="py-16 px-4 lg:px-20 text-white scroll-mt-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-14  decoration-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {skills.map((section, index) => (
          <motion.div
            key={index}
            className="space-y-4"
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold ">
              {section.category}
            </h3>
            <div className="flex flex-wrap gap-8">
              {section.items.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 object-cover rounded-full border-2 border-cyan-400"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                  <span className="mt-2 text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
