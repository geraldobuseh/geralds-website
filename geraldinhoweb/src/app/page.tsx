"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { useScrollSpy } from "./hooks/useScrollSpy";

export default function Home() {
  // IDs for sections
  const sectionIds = ["home", "about", "education", "experience", "projects", "contact"];
  const activeId = useScrollSpy(sectionIds, 100); // offset = 100px for sticky header
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tracking-wider font-light mx-auto min-h-screen max-w-screen-xl px-8 py-2 font-sans md:px-12 md:py-16 lg:py-0 relative">

      <div className="justify-between border-r border-slate-800 p-6 text-white lg:flex lg:justify-between lg:gap-4">

          {/* Mobile Nav */}
        <div className="lg:hidden fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50">
          <nav className="flex justify-between items-center p-4">
            <h1 className="text-lg font-semibold text-secondary">Gerald.</h1>

            {/* Hamburger button */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-white text-2xl"
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </nav>

          {/* Fullscreen overlay menu with animation */}
          {isOpen && (
            <div
              className="fixed inset-0 w-full h-screen bg-black/95 z-50 flex flex-col justify-center items-center
                        animate-fadeIn"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl"
                aria-label="Close menu"
              >
                <FiX />
              </button>

              <ul className="flex flex-col gap-10 text-center animate-slideIn">
                {sectionIds.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setIsOpen(false)} // close after click
                      className="text-3xl font-light tracking-widest text-white hover:text-secondary transition"
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        
        <header className="lg:sticky lg:top-0 pt-15 pb-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          
          <div> 
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="#home" className="hover:text-secondary">Gerald Obuseh</a>
            </h1>
            <h2 className="text-lg font-medium tracking-tight text-slate-200 mt-2">
              Software Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build accessible, performant digital experiences for the web.
            </p>
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                <li>
                  <a className="group flex items-center py-3 active" href="#about">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                  </a>
                </li>
                <li>
                <a className="group flex items-center py-3 active" href="#education">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Education</span>
                  </a>
                </li>
                <li>
                <a className="group flex items-center py-3 active" href="#experience">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                  </a>
                </li>
                <li>
                <a className="group flex items-center py-3 active" href="#projects">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                  </a>
                </li>
                <li>
                <a className="group flex items-center py-3 active" href="#trivia">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Trivia</span>
                  </a>
                </li>
                <li>
                <a className="group flex items-center py-3 active" href="#playlist">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Playlist</span>
                  </a>
                </li>
                <li>
                <a className="group flex items-center py-3 active" href="#contact">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Contact</span>
                  </a>
                </li>
              </ul>
            </nav>  
          </div>

          <ul className="mt-8 flex space-x-5 text-slate-300" aria-label="Social media">
            {/* GitHub */}
            <li>
              <a
                className="block hover:text-secondary transition-colors"
                href="https://github.com/geraldobuseh"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="h-7 w-7">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 
                  5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94
                  -.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
                  1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07
                  -1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
                  -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 
                  018 4.84c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 
                  2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 
                  1.27.82 2.15 0 3.07-1.87 3.75-3.65 
                  3.95.29.25.54.73.54 1.48 0 1.07-.01 
                  1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 
                  0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                className="block hover:text-secondary transition-colors"
                href="https://www.linkedin.com/in/gerald-obuseh-22074724a/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="h-7 w-7">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                </svg>
              </a>
            </li>

            {/* Instagram */}
            <li>
              <a
                className="block hover:text-secondary transition-colors"
                href="https://www.instagram.com/geraldinhogram/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-7 w-7">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 
                  1.366.062 2.633.35 3.608 1.325.975.975 
                  1.262 2.242 1.324 3.608.058 1.266.069 
                  1.646.069 4.85s-.011 3.584-.069 
                  4.85c-.062 1.366-.349 2.633-1.324 
                  3.608-.975.975-2.242 1.262-3.608 
                  1.324-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.349-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608C2.175 
                  15.747 2.163 15.367 2.163 
                  12s.012-3.584.07-4.85c.062-1.366.349-2.633 
                  1.324-3.608C4.532 2.583 5.799 2.296 7.165 
                  2.234 8.431 2.176 8.811 2.163 12 
                  2.163zm0 1.687c-3.17 0-3.548.012-4.796.07-1.046.048-1.613.218-1.985.362-.5.194-.857.427-1.232.802-.375.375-.608.732-.802 
                  1.232-.144.372-.314.939-.362 
                  1.985-.058 1.248-.07 1.626-.07 
                  4.796s.012 3.548.07 4.796c.048 1.046.218 1.613.362 
                  1.985.194.5.427.857.802 
                  1.232.375.375.732.608 1.232.802.372.144.939.314 
                  1.985.362 1.248.058 1.626.07 
                  4.796.07s3.548-.012 4.796-.07c1.046-.048 
                  1.613-.218 1.985-.362.5-.194.857-.427 
                  1.232-.802.375-.375.608-.732.802-1.232.144-.372.314-.939.362-1.985.058-1.248.07-1.626.07-4.796s-.012-3.548-.07-4.796c-.048-1.046-.218-1.613-.362-1.985-.194-.5-.427-.857-.802-1.232-.375-.375-.732-.608-1.232-.802-.372-.144-.939-.314-1.985-.362-1.248-.058-1.626-.07-4.796-.07zm0 3.905a5.932 
                  5.932 0 100 11.864 5.932 5.932 0 000-11.864zm0 9.78a3.849 
                  3.849 0 110-7.698 3.849 3.849 0 010 7.698zm6.406-10.845a1.44 
                  1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
                </svg>
              </a>
            </li>

            <li>
              <a
                className="block text-slate-400 hover:text-slate-200 transition-colors"
                href="https://www.facebook.com/people/Gerald-Obuseh/pfbid02tsBCNNumU3fL5JshLqbCJKDwGVKevEhA6odg9CUP2Wn7rdbYwC8q5azdkQuNbToLl/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 
                  1.326v21.348C0 23.407.593 24 1.325 
                  24h11.495v-9.294H9.692V11.08h3.128V8.413c0-3.1 
                  1.894-4.788 4.659-4.788 1.325 0 
                  2.464.099 2.796.143v3.24l-1.92.001c-1.505 
                  0-1.796.716-1.796 1.765v2.312h3.587l-.467 
                  3.626h-3.12V24h6.116C23.407 24 24 
                  23.407 24 22.674V1.326C24 
                  .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
            </li>

            {/* X (Twitter) */}
            <li>
              <a
                className="block hover:text-secondary transition-colors"
                href="https://x.com/gerald_obuseh"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="X"
                title="X (Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1200 1227" className="h-7 w-7">
                  <path d="M714.163 519.284L1160.89 0H1052.9L668.11 
                  450.887 356.178 0H0L468.776 681.821 0 
                  1226.9H108.038L515.354 750.639 843.822 
                  1226.9H1200L714.137 519.284H714.163ZM566.09 
                  692.964L520.77 628.505 147.114 79.694H308.291L607.054 
                  510.173 652.373 574.632 1058.01 1147.79H896.833L566.09 
                  692.99V692.964Z"/>
                </svg>
              </a>
            </li>
          </ul>

        </header>
    

        {/* Main Content */}
        <main className="lg:ml-[250px] max-w-3xl mx-auto px-6">
          {/* Hero Section */}
          <section id="home" className="h-screen flex flex-col justify-center">
            <p className="text-secondary mb-2 font-mono">Hi, my name is</p>
            <h1 className="text-5xl font-bold mb-4">Gerald Obuseh.</h1>
            <h2 className="text-3xl text-gray-400 mb-6">I build things for the web.</h2>
            <p className="text-gray-400 max-w-xl">
              I’m a Software Engineer and Computer Science senior at Texas State
              University. Passionate about building responsive interfaces,
              intelligent systems, and solving real-world problems with code.
            </p>
            <a
              href="#projects"
              className="mt-8 inline-block border border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary hover:text-black transition"
            >
              See my work
            </a>
          </section>

          {/* About */}
          <section id="about" className="py-24">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400 mb-4">
              I’m originally from Delta State, Nigeria, and currently pursuing a
              B.S. in Computer Science and Mathematics at Texas State University...
            </p>
            <Image src="/4.jpg" alt="Gerald Obuseh" width={300} height={300} className="rounded-lg mt-6" />
          </section>

          {/* Education */}
          <section id="education" className="py-24">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Texas State University</h3>
                <p className="text-gray-400">B.Sc. in Computer Science, Minor in Mathematics (Expected 2026)</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">University of Lagos</h3>
                <p className="text-gray-400">Visiting Undergraduate (2021-2022)</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="py-24">
            <h2 className="text-3xl font-bold mb-6">Projects & Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-800 rounded hover:border-secondary transition">
                <h3 className="font-semibold mb-2">My Playlist</h3>
                <iframe
                  className="rounded w-full"
                  src="https://embed.music.apple.com/us/playlist/winter-25/pl.u-xlyNqJdIJ7dYpAM"
                  height="200"
                />
              </div>
              <div className="p-6 border border-gray-800 rounded hover:border-secondary transition">
                <h3 className="font-semibold mb-2">Trivia Game</h3>
                <p className="text-gray-400">Fun interactive trivia quiz.</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-24 text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-400 mb-6">
              I’m always open to discussing new opportunities, collaborations, or side projects.
            </p>
            <a
              href="mailto:geraldobuseh81@gmail.com"
              className="inline-block border border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary hover:text-black transition"
            >
              Say Hello
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}
