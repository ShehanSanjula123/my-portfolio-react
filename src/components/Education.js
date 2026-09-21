import {
  GraduationCap,
  Award,
  CalendarDays,
  University,
} from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-slate-50 py-24 dark:bg-slate-900/40 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Background
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Education & Achievement
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Education */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <GraduationCap size={23} />
            </div>

            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Bachelor's Degree
            </p>

            <h3 className="max-w-xl text-xl font-bold leading-8 text-slate-900 sm:text-2xl dark:text-white">
              BSc (Hons) in Computing and Information Systems
            </h3>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <University size={17} className="shrink-0" />
                Sabaragamuwa University of Sri Lanka
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <CalendarDays size={17} className="shrink-0" />
                2022 – Present
              </div>
            </div>

            <div className="mt-7 inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
              Academic requirements completed
            </div>
          </div>

          {/* Achievement */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">

            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                <Award size={23} />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Achievement
              </p>

              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                Brainstorm '24
              </h3>

              <p className="mt-2 font-semibold text-blue-600 dark:text-blue-400">
                Semifinalist
              </p>

              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  HealthSync
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Organized by IEEE Student Branch, University of Moratuwa
                </p>

                <p className="mt-3 text-xs font-medium text-slate-400">
                  May 2024
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}