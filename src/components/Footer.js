import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center justify-between gap-7 sm:flex-row">

          {/* Brand */}
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Shehan<span className="text-blue-600">.</span>
            </a>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Software Engineer
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/ShehanSanjula123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/shehan-sanjula-29396b2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:shehansanjula321@gmail.com"
              aria-label="Email"
              className="social-link"
            >
              <Mail size={18} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="social-link ml-2"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 text-center text-xs text-slate-400 dark:border-slate-800 sm:flex-row sm:justify-between sm:text-left">
          <p>© {year} Shehan Sanjula. All rights reserved.</p>

          <p>Designed & built by Shehan Sanjula</p>
        </div>

      </div>
    </footer>
  );
}