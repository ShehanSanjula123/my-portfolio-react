import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export default function LandingPage() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-16 dark:bg-slate-950"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">

        {/* Left Content */}
        <div className="order-2 lg:order-1">
          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Open to Software Engineering Opportunities
          </div>

          <p className="mb-3 text-lg font-semibold text-blue-600 dark:text-blue-400">
            Hi, I'm Shehan Sanjula
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Software Engineer building{" "}
            <span className="text-blue-600 dark:text-blue-400">
              practical digital products.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            Full-stack focused Software Engineer with hands-on experience
            building web and mobile applications, integrating APIs, and
            developing real-world software solutions.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin size={17} />
            Colombo, Sri Lanka
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View My Work
              <ArrowRight size={17} />
            </a>

            <a
              href="/Shehan-Sanjula-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <Download size={17} />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center gap-3">
            <a
              href="https://github.com/ShehanSanjula123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/shehan-sanjula-29396b2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:shehansanjula321@gmail.com"
              aria-label="Email"
              className="social-link"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">

            {/* Decoration */}
            <div className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
              <img
                src="/MyPhoto_new-removebg-preview.png"
                alt="Shehan Sanjula"
                className="h-[390px] w-[310px] object-cover object-top sm:h-[480px] sm:w-[380px]"
              />
            </div>

            {/* Developer Card */}
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 sm:-left-10">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Software Engineer
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Full-Stack • Web • Mobile
              </p>
            </div>

            {/* Experience Card */}
            <div className="absolute -right-3 top-8 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 sm:-right-10">
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                7 Months
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Internship Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}