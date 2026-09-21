import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  CheckCircle2,
} from "lucide-react";

export default function Experience() {
  const responsibilities = [
    "Contributed to 8+ web and mobile projects in a collaborative software development environment.",
    "Developed multi-role features including authentication, admin dashboards, product, quotation, order, payment and tracking workflows.",
    "Integrated APIs and contributed to testing, debugging and deployment.",
    "Worked across frontend, backend and mobile development using modern frameworks and services.",
  ];

  const technologies = [
    "React.js",
    "Next.js",
    "Laravel",
    "NestJS",
    "Flutter",
    "Firebase",
    "Node.Js",
  ];

  return (
    <section
      id="experience"
      className="bg-white py-24 dark:bg-slate-950 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Experience
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Professional Experience
          </h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            Hands-on experience contributing to real-world web and mobile
            software projects.
          </p>
        </div>

        {/* Experience */}
        <div className="relative">
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-slate-200 dark:bg-slate-800 sm:block" />

          <div className="relative sm:pl-16">

            {/* Timeline Icon */}
            <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white dark:border-slate-950 sm:flex">
              <BriefcaseBusiness size={17} />
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60">

              {/* Top */}
              <div className="border-b border-slate-200 p-6 dark:border-slate-800 sm:p-8">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">

                  <div>
                    <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                      <BriefcaseBusiness size={16} />
                      Software Engineering
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                      Software Engineer Intern
                    </h3>

                    <p className="mt-1 font-medium text-slate-600 dark:text-slate-300">
                      OnCode Tech Solutions (Pvt) Ltd
                    </p>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                    <CalendarDays size={16} />
                    Mar 2025 — Sep 2025
                  </div>

                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">

                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      25 Weeks
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Software Engineering Internship
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      8+
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Web & Mobile Projects
                    </p>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-4">
                  {responsibilities.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-blue-600 dark:text-blue-400"
                      />

                      <p className="leading-7 text-slate-600 dark:text-slate-400">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                  <div className="mb-4 flex items-center gap-2">
                    <Code2
                      size={17}
                      className="text-slate-500 dark:text-slate-400"
                    />
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Technologies
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}