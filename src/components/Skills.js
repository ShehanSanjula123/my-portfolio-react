import {
  Code2,
  Server,
  Smartphone,
  Database,
  Terminal,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "Next.js","React Native", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Express.js", "NestJS", "Laravel"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Flutter"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: ["C", "Java", "Python"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["GitHub", "Figma", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-24 dark:bg-slate-950 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Tech Stack
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Technologies I work with
          </h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            Technologies and tools I've used across web, mobile, backend,
            and software development projects.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <div
              key={title}
              className="group rounded-xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500/40 dark:hover:shadow-black/20"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon size={19} />
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white">
                  {title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition group-hover:border-slate-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}