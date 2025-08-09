import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 p-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl w-full items-center">
        {/* Left: Text content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading with typing and waving emoji */}
          <div className="flex items-center gap-3">
            <motion.span
              className="text-4xl sm:text-5xl"
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatDelay: 3,
              }}
              role="img"
              aria-label="Waving hand"
            >
              👋
            </motion.span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm{" "}
              <span className="text-blue-600">Ayoola Tajudeen Salau</span>
              <br />
              <span className="text-blue-600">
                <Typewriter
                  words={[
                    "a Critical Thinker...🧠🧠",
                    "a Problem Solver...💡💡",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-xl">
            I’m a <strong>Full-Stack Software Developer</strong> passionate
            about building scalable, maintainable, and user-friendly
            applications using{" "}
            <span className="text-blue-600 font-medium">React</span>,{" "}
            <span className="text-blue-600 font-medium">TypeScript</span>, and{" "}
            <span className="text-blue-600 font-medium">Node.js</span>.
          </p>

          <p className="text-md text-gray-600 max-w-xl">
            I focus on clean code, strong architecture, and creative solutions —
            whether I'm building a sleek frontend interface or a powerful
            backend API.
          </p>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/img.png"
            alt="Salau Ayoola"
            className="w-full max-w-md lg:w-[70%] h-auto rounded-3xl mt-4 shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
