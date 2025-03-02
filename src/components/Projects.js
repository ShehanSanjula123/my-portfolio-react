import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "KidsCare Mobile App",
    image: './mobile frontPage.jpeg',
    description: "A React Native app for childcare management, featuring real-time updates and intuitive UI.",
    technologies: ["React Native", "ReactJS", "NestJS", "MongoDB"],
    github: "https://github.com/yourusername/kidscare-app",
    demo: "https://kidscare-demo.netlify.app"
    
  },
  {
    title: "Smart Web-Based Member Management System Group ",
    image:"./FitnessGym.png",
    description: "A  comprehensive member management system for Titan Fitness Center.",
    technologies: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
    github: "https://github.com/sachishehan/Web-Based-Member-Management-System-for-Titan-Fitness-Center",
    demo: "https://ecommerce-demo.herokuapp.com"
  },
  {
    title: "Restaurant Website",
    image:'./Resturent.png',
    description: "Responsive and User Friendly full stack website of Restaurant Reservation with Admin pannel.",
    technologies: ["React", "ExpressJS", "MongoDB"],
    github: "https://github.com/ShehanSanjula123/Resturant_Website_React",
    demo: "https://weather-dash-demo.netlify.app"
  },
  {
    title: "Food Recipe Application",
    image:'./FoodReciepApp.png',
    description: "  Developing a fully functional & responsive food recipe app with recipe categories, recipe details and search any recipe.",
    technologies: ["React Native"],
    github: "https://github.com/ShehanSanjula123/Food-Recipe-App",
    demo: "https://weather-dash-demo.netlify.app"
  },
  {
    title: "Breakdown Vehicle Guide Website",
    image:'./car.png',
    description: "First dedicated breakdown assistance solution in Sri Lanka with advanced functionalities including live monitoring of roadside help requests.",
    technologies: ["ReactJS"],
    github: "https://github.com/ShehanSanjula123/Breakdown-vehicle-guide-",
    demo: "https://weather-dash-demo.netlify.app"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <Github className="h-5 w-5 mr-1" />
                    GitHub
                  </a>
                 {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}