"use client";
import Image from "next/image";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  // IDs for sections
  const sectionIds = ["home", "about", "education", "experience", "projects", "contact"];
  const activeId = useScrollSpy(sectionIds, 100); // offset = 100px for sticky header

  return (
    <div className="tracking-wider font-light mx-auto min-h-screen max-w-screen-xl px-8 py-2 font-sans md:px-12 md:py-16 lg:py-0 relative">
      
      {/* Sidebar Nav */}
      {/*<aside className="sticky top-0 lg:max-h-screen lg:w-[250px] flex flex-col justify-between border-r border-slate-800 p-6 bg-black text-white">**/}
      <div className="justify-between border-r border-slate-800 p-6 text-white lg:flex lg:justify-between lg:gap-4">
        
        {/* Header */}
        <div className="mt-12">
          <h1 className="text-3xl font-bold tracking-tight text-white">Gerald Obuseh</h1>
          <h2 className="text-lg font-medium tracking-tight text-slate-200 mt-2">
            Software Engineer
          </h2>
          <p className="mt-2 max-w-xs text-sm leading-normal text-slate-400">
            I build accessible, performant digital experiences for the web.
          </p>

          {/* Nav */}
          <nav aria-label="Page jump links" className="mt-12">
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="group flex items-center py-3 hover:text-secondary transition"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 group-hover:bg-secondary transition-all" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-secondary">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="group flex items-center py-3 hover:text-secondary transition"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 group-hover:bg-secondary transition-all" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-secondary">
                    Experience
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="group flex items-center py-3 hover:text-secondary transition"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 group-hover:bg-secondary transition-all" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-secondary">
                    Projects
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="group flex items-center py-3 hover:text-secondary transition"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 group-hover:bg-secondary transition-all" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-secondary">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 text-xl">
          <a href="https://github.com/geraldobuseh" className="hover:text-secondary">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/gerald-obuseh-22074724a" className="hover:text-secondary">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/gerald_obuseh" className="hover:text-secondary">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/geraldydx" className="hover:text-secondary">
            <FaInstagram />
          </a>
        </div>
    

        {/* Top Nav for mobile */}
        <header className="lg:hidden fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50">
          <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-bold text-secondary">Gerald</h1>
            <ul className="flex gap-4 text-sm">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`transition ${
                      activeId === id ? "text-secondary font-semibold" : "hover:text-secondary"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
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
