import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import piggyvestImg from "../assets/projects/piggyvest.png";
import mooveImg from "../assets/projects/moove.png";
import metaverseImg from "../assets/projects/metaverse.png";

type Project = {
  id: number;
  title: string;
  summary: string;
  details: string;
  image: string;
  stack: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Pigggyvest Clone",
    summary:
      "PiggyVest is a personal finance app that makes saving and investing simple, disciplined, and rewarding for users in Nigeria and beyond.",
    details:
      "This personal portfolio showcases my projects and technical skills, with responsive design, charts, and animations.",
    image: piggyvestImg,
    stack: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourname/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "Metaverse Clone",
    summary:
      "The metaverse app is a virtual world in which users interact while represented by avatars, typically in a 3D display, with the experience focused on social and economic connection.",
    details:
      "This personal portfolio showcases my projects and technical skills, with responsive design, charts, and animations.",
    image: metaverseImg,
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourname/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    id: 3,
    title: "Moove Clone",
    summary:
      "Moove.io is a user-friendly car rental service app that allows users to browse, book, and manage vehicle rentals quickly and conveniently. The app offers a wide selection of vehicles, from economy cars to luxury SUVs, available for hourly, daily, or weekly rental. Key features include real-time vehicle availability, GPS-based pickup/drop-off location selection, secure in-app payments, and 24/7 customer support. Users can also access rental history, receive digital keys, and get maintenance alerts or special offers through the app.",
    details:
      "Includes full authentication, CRUD operations, and JWT-based authorization. Built with RESTful architecture and error handling.",
    image: mooveImg,
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/yourname/task-manager-api",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    },
    [setSelectedProject]
  );

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"; // prevent background scroll
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, handleKeyDown]);

  // Close modal if clicking backdrop (outside modal content)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedProject(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-20 px-4 sm:px-6">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
        My Projects
      </h2>
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((proj) => (
          <motion.article
            key={proj.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md cursor-pointer flex flex-col"
            onClick={() => setSelectedProject(proj)}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 10px 20px rgba(59,130,246,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            layout
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedProject(proj);
              }
            }}
            aria-label={`View details for ${proj.title}`}
          >
            <img
              src={proj.image}
              alt={`${proj.title} screenshot`}
              className="w-full h-48 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-600 flex-grow">{proj.summary}</p>
              <button
                className="mt-4 self-start text-blue-600 hover:text-blue-800 font-semibold underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(proj);
                }}
                aria-label={`View more details about ${proj.title}`}
              >
                View More →
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
          >
            <motion.div
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl relative flex flex-col"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              layout
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-3xl font-bold leading-none focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                &times;
              </button>

              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} detailed screenshot`}
                className="w-full h-64 object-cover rounded-t-xl"
                loading="lazy"
              />

              <div className="p-8 flex flex-col gap-6">
                <h3
                  id="modal-title"
                  className="text-3xl font-bold text-gray-900"
                >
                  {selectedProject.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.details}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Tech Stack:
                  </h4>
                  <ul className="flex flex-wrap gap-3">
                    {selectedProject.stack.map((tech, idx) => (
                      <li
                        key={idx}
                        className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-6 text-blue-700 font-semibold">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
                    >
                      GitHub Repo
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
