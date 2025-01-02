const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-gray-700 border-none p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Who I Am</h2>
              <p>
              I am a dedicated undergraduate specializing in Computing and Information Systems at Sabaragamuwa University of Sri Lanka. 
              With a focus on ReactJS, ExpressJS, and React Native, I am passionate about full-stack development. Eager to apply 
              my skills and knowledge during an internship, I aim to contribute effectively to dynamic projects while continuing to grow in the IT industry.
              </p>
            </div>
            <div className="bg-gray-700 border-none p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">My Journey</h2>
              <p>
              From the early days of exploring coding fundamentals to developing full-fledged applications, my journey has been one of continuous learning and growth. 
              Through academic projects and self-driven initiatives, I have honed my skills in full-stack development, particularly with ReactJS, ExpressJS, and React Native. 
              Each step has reinforced my passion for creating innovative solutions and contributing to impactful projects.
              </p>
            </div>
            <div className="bg-gray-700 border-none p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Beyond Coding</h2>
              <p>
              When I'm not immersed in development, I enjoy exploring innovative technologies, staying updated on industry trends, and collaborating on creative projects. 
              I also value spending quality time outdoors, engaging in productive discussions, and finding inspiration from the world around me. 
              For me, a well-rounded approach to life fuels creativity and enhances my problem-solving abilities.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src="/MyPhoto_new-removebg-preview.png"
                alt="John Doe"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;