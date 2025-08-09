import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const skills = {
  labels: ["React", "TypeScript", "Tailwind", "Node.js", "GraphQL", "MongoDB"],
  datasets: [
    {
      label: "Proficiency (%)",
      data: [95, 95, 90, 80, 75, 80],
      backgroundColor: "#3b82f6",
      borderRadius: 6,
    },
  ],
};

const options = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) => `${ctx.raw}%`,
      },
    },
  },
  scales: {
    x: {
      max: 100,
      ticks: {
        callback: (tickValue: string | number) => `${tickValue}%`,
      },
    },
  },
};

export default function About() {
  return (
    <motion.div
      className="max-w-6xl mx-auto mt-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">👋 About Me</h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 mb-4">
            I'm a full-stack developer whose mission is simple yet ambitious: to
            build software that solves problems, sparks joy, and withstands the
            test of time (and users with a knack for breaking things). I seek to
            join a team where innovation meets impact, where I can contribute my
            technical prowess, collaborative spirit, and occasional pun to
            create something extraordinary. Thank you for taking the time to
            learn about me. I look forward to the opportunity to write code,
            share laughs, and make the digital world a better place—one commit
            at a time.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>🔥 Frontend fanatic with a passion for UX</li>
            <li>⚙️ Backend builder who loves APIs</li>
            <li>🌐 Always learning — always building</li>
          </ul>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Bar data={skills} options={options} />
        </motion.div>
      </div>
    </motion.div>
  );
}
