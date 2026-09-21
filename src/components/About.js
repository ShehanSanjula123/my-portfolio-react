import {
  Code2,
  GraduationCap,
  MapPin,
  Target,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  const details = [
    {
      icon: MapPin,
      label: "Location",
      value: "Colombo, Sri Lanka",
    },
    {
      icon: Code2,
      label: "Focus",
      value: "Full-Stack Development",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "BSc (Hons) Computing & IS",
    },
    {
      icon: Target,
      label: "Current Goal",
      value: "Associate / Junior SE",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-50 py-24 dark:bg-slate-900/40 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Building software with purpose.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* About Content */}
          <div>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              I have completed all academic requirements for a{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                BSc (Hons) in Computing and Information Systems
              </span>{" "}
              at Sabaragamuwa University of Sri Lanka.
            </p>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
              Through my software engineering internship and academic projects,
              I have gained hands-on experience across full-stack web and mobile
              development. I enjoy building user-focused interfaces, integrating
              APIs, developing backend functionality, and turning practical
              requirements into working software solutions.
            </p>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
              I'm currently looking for an Associate or Junior Software Engineer
              opportunity where I can contribute to real products, collaborate
              with development teams, and continue growing as an engineer.
            </p>

            <a
              href="#experience"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3 dark:text-blue-400"
            >
              See my experience
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Quick Details */}
          <div className="grid gap-4 sm:grid-cols-2">
            {details.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/40 dark:hover:shadow-black/20"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon size={19} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {label}
                </p>

                <p className="mt-1.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}