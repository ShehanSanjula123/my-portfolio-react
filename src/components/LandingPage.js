import { ArrowDown } from 'lucide-react'

export default function LandingPage() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Shehan Sanjula</h1>
        <p className="text-xl md:text-2xl mb-8">A passionate Full-Stack Developer</p>
        <a
          href="#about"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Learn More
        </a>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </section>
  )
}