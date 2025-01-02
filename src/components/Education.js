export default function Education() {
    return (
      <section id="education" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">B.sc(hons) in Computing and Information system</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Sabaragamuwa University of Sri Lanka,  Expected Graduation: 2026</p>
            <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              <li>Data Structures and Algorithms</li>
              <li>Web Development</li>
              <li>Database Management Systems</li>
              <li>Software Engineering</li>
              <li>Machine Learning</li>
              <li>Computer Networks</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }