/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Header({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">Shehan Sanjula</a>
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 mr-4"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block bg-white dark:bg-gray-800 md:bg-transparent`}>
        <ul className="container mx-auto px-4 py-2 md:py-0 flex flex-col md:flex-row md:items-center">
          <li><a href="#home" className="block py-2 md:px-4 hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="block py-2 md:px-4 hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="block py-2 md:px-4 hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
          <li><a href="#skills" className="block py-2 md:px-4 hover:text-blue-600 dark:hover:text-blue-400">Skills</a></li>
          <li><a href="#education" className="block py-2 md:px-4 hover:text-blue-600 dark:hover:text-blue-400">Education</a></li>
          <li><a href="#contact" className="block py-2 md:px-4 hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}