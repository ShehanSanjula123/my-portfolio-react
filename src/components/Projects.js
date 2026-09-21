import {
  ArrowUpRight,
  Github,
  Smartphone,
  BrainCircuit,
  HeartPulse,
} from "lucide-react";

const projects = [
  {
    title: "iMarket",
    subtitle: "B2B Import / Export Marketplace",
    category: "Mobile Application",
    icon: Smartphone,
    description:
      "A marketplace application supporting buyers, sellers, and administrators across quotation, ordering, payment, delivery, and customer-support workflows.",
    highlights: [
      "3 user roles",
      "7+ core workflows",
      "Bank transfer & PayPal payments",
      "Firebase Cloud Functions notifications",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
      "Cloud Functions",
    ],

    // Replace with your actual project screenshot
    image: "/imarket.jpg",

    // Add real URL only
    github: "https://github.com/oncodetechsolution/imarketmobile",
    live: "",
  },

  {
    title: "AI-Powered Interview Coach",
    subtitle: "Intelligent Interview Performance Platform",
    category: "Full Stack + AI",
    icon: BrainCircuit,
    description:
      "A full-stack interview coaching platform that analyzes verbal and non-verbal interview performance and provides structured scoring, feedback, history, and progress tracking.",
    highlights: [
      "6+ performance indicators",
      "Verbal & non-verbal analysis",
      "Role-based access",
      "Performance & progress tracking",
    ],
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "MySQL",
      "Whisper",
      "OpenCV",
    ],

    image: "/interview.png",

    github: "https://github.com/ShehanSanjula123/ai-interview-coach",
    live: "",
  },

  {
    title: "KidsCare",
    subtitle: "Medical Records & Vaccination Management",
    category: "Web + Mobile",
    icon: HeartPulse,
    description:
      "A group project designed to support secure management of children's medical records and vaccination schedules.",
    contribution:
      "My contribution focused on frontend development for the doctor's application view and the administrator web interface.",
    highlights: [
      "Medical record management",
      "Vaccination schedules",
      "Doctor application interface",
      "Administrator website",
    ],
    technologies: ["React.js", "React Native", "NestJS", "MongoDB"],

    image: "/mobile frontPage.jpeg",

    github: "https://github.com/Amindu-sathsara/Capstone_project-20-21-",
    live: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 py-24 dark:bg-slate-900/40 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Selected Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Featured Projects
          </h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            A selection of web, mobile, and AI projects where I worked on
            practical software solutions and real-world functionality.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Project Image */}
                <div
                  className={`${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  } group relative`}
                >
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 blur-xl" />

                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                    <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    </div>

                    <div className="aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950">
                      <img
                        src={project.image}
                        alt={`${project.title} project`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      <Icon size={19} />
                    </div>

                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-1 font-medium text-blue-600 dark:text-blue-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  {project.contribution && (
                    <div className="mt-5 border-l-2 border-blue-500 pl-4">
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          My contribution:{" "}
                        </span>
                        {project.contribution}
                      </p>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-slate-200/70 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.github || project.live) && (
                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          <Github size={17} />
                          Source Code
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                          Live Demo
                          <ArrowUpRight size={17} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="mt-24 flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center dark:border-slate-800 dark:bg-slate-900">
          <Github
            size={28}
            className="mb-4 text-slate-700 dark:text-slate-300"
          />

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            More projects on GitHub
          </h3>

          <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500 dark:text-slate-400">
            Explore more of my development work, experiments, and project
            repositories on GitHub.
          </p>

          <a
            href="https://github.com/ShehanSanjula123"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3 dark:text-blue-400"
          >
            Visit my GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}