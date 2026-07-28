import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      
      <nav className="fixed w-full top-0 bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tighter text-indigo-600">SVVAMI</a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
          </div>
          <a href="#contact" className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-indigo-600 transition-colors">
            Get in Touch
          </a>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-4">Swaminathan G • RIT Kottayam</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-slate-900">
            Engineering dynamic web applications.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            I’m a technology student focused on building secure database-driven solutions, dynamic PHP architectures, and reliable local server environments.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
              View Projects
            </a>
            <a href="#about" className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Professional Background</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                As an MCA student based in Kerala, India, I specialize in full-stack web development utilizing PHP, MySQL, and modern frontend interfaces. I focus on clean code structuring, efficient database querying, and building reliable database-backed applications.
              </p>
              <blockquote className="border-l-4 border-indigo-600 pl-6 italic text-slate-700 font-medium text-lg">
                "Structured database design and clean backend logic form the backbone of maintainable software."
              </blockquote>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold mb-6">Academic Details</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-medium">Institution</span> <span>RIT Kottayam</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-medium">Location</span> <span>Kerala, India</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-medium">Core Focus</span> <span className="text-right">Full-Stack, DBMS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-slate-600 mb-12 max-w-2xl">Core software implementations developed using PHP, MySQL, and the XAMPP stack within a VS Code workspace.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
            <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">Mini Project</span>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">Heart Care Prediction System</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              A web-based healthcare assessment tool utilizing PHP and MySQL to process patient medical indicators, securely store diagnostic metrics, and deliver preliminary cardiac health risk evaluations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm font-semibold text-slate-900 hover:text-indigo-600 underline underline-offset-4">GitHub Repo</a>
              <a href="#" className="text-sm font-semibold text-slate-900 hover:text-indigo-600 underline underline-offset-4">Live Demo</a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
            <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">Main Project</span>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">Employee Management System</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              A comprehensive enterprise resource application built with PHP, MySQL, HTML, CSS, and JavaScript. Features role-based access control, employee record tracking, payroll management, and department workflows.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm font-semibold text-slate-900 hover:text-emerald-600 underline underline-offset-4">GitHub Repo</a>
              <a href="#" className="text-sm font-semibold text-slate-900 hover:text-emerald-600 underline underline-offset-4">Live Demo</a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Technical Proficiency</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['PHP', 'MySQL & phpMyAdmin', 'HTML5 & CSS3', 'JavaScript', 'XAMPP Environment', 'VS Code Workflow', 'Git & GitHub'].map((skill, index) => (
              <span key={index} className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-full text-slate-300 font-medium hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's build something together.</h2>
        <p className="text-slate-600 text-lg mb-10">
          Open to professional inquiries, technical collaborations, and software development opportunities.
        </p>
        <a href="mailto:your.email@example.com" className="inline-block px-10 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-200">
          Initiate Contact
        </a>
      </section>

      <footer className="py-8 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>© 2026 SVVAMI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;