import { motion } from "framer-motion";
import aws from "../assets/skills/aws.png";
import solutions from "../assets/skills/saa.jpeg";
import redhat from "../assets/skills/redhat.png";
import rpa from "../assets/skills/rpa.jpeg";
import salesforce from "../assets/skills/sales.png";
import aviatrix from "../assets/skills/ace.png";


// Certification data
const certifications = [
  {
    title: "AWS Solutions Architect – Associate",
    image: solutions,
    link: "https://www.credly.com/badges/031305cb-c278-4f0f-bcc4-96888602d032/public_url",
    
  },
  {
    title: "AWS - Cloud Practitioner",
    image: aws,
    link: "https://www.credly.com/badges/c31fba5a-92bf-4c91-a813-27a3d1d83812/public_url",
   
  },
  {
    title: "Red Hat Enterprise Application Development (EX-183)",
    image: redhat,
    link: "https://www.credly.com/badges/4597cd30-9aba-4d76-ac51-2a566de45256/public_url",
  },
  {
    title: "Salesforce - Developer",
    image: salesforce,
    link: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=V897Et6SHk5bC0+Y9LA0cnkiLfW0nm+36Gj7lOBwFol3kw+YKJ6cyx/ZqHWcelFx",
  },
  {
    title: "Robotic Process Automation",
    image: rpa,
    link: "https://www.linkedin.com/posts/datla-sudeep-varma-177028226_automation-any-where-certified-essentials-activity-7207054876852277248-J7td?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADiZuOsBE0xd7bz7fXb084kaDsB_ISfuEyk",
    
  },
  {
    title: "Aviatrix Certified Engineer",
    image: aviatrix,
    link: "https://www.credly.com/badges/bd5637c9-679a-4188-b2e2-2196d42a805b/public_url",
  },
];

// Framer Motion variants
const variants = {
  hidden: (isLeft) => ({
    opacity: 0,
    x: isLeft ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};



const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4  text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        My Certifications
      </motion.h2>

      <div className="space-y-10">
        {certifications.map((cert, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial="hidden"
              whileInView="visible"
              custom={isLeft}
              variants={variants}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div
                className={`w-full md:max-w-[600px] mx-auto flex flex-col sm:flex-row items-center gap-4 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-20 h-20 object-contain rounded-full shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="text-center sm:text-left space-y-1">
                  <h3 className="text-base md:text-lg font-semibold leading-tight">
                    {cert.title}
                  </h3>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black px-3 py-1 text-xs md:text-sm rounded-full font-medium hover:bg-blue-700 transition"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
