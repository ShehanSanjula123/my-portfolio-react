const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "C"],
    "Frontend": ["React", "HTML", "CSS", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js"],
    "Databases": ["MongoDB", "MySQL"],
    "Tools & Others": ["Git", "VSCode", "Figma", ]
  }
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }