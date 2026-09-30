import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import BeyondCode from "./BeyondCode";

const projects = [
  {
    number: "01",
    title: "Acads: A College Management System",
    description:
      "A smart platform designed to streamline and automate college administrative and academic processes, reducing manual effort while delivering a seamless, efficient, and user-friendly experience for students and staff.",
    stack: "Node.js · React · PostgreSQL · Sequelize · JWT",
    github: "https://github.com/josephcbweb/CEC-connect"
  },
  {
    number: "02",
    title: "Waves Portal - Employee Self-Service (ESS) Platform",
    description:
      "An employee portal designed to streamline workflows through timesheet management, admin controls, secure remote access, and centralized infrastructure.",
    stack: "Node.js · Express · MySQL · Redis",
    github: "https://github.com/josephcbweb/waves"
  },
  {
    number: "03",
    title: "E-Commerce Backend API",
    description:
      "A RESTful e-commerce backend built with Node.js and Express, featuring JWT authentication, role-based access control, product and cart management, order processing, image uploads, and Redis caching.",
    stack: "Node.js · Express.js · MySQL · Sequelize · JWT · Redis · Docker · Swagger",
    github: "https://github.com/CodeLachu/ecommerce-backend-api"
  },
  // {
  //   number: "04",
  //   title: "StreamLine: A system developed to increase the productivity and optimize office works",
  //   description:
  //     "A service-based application using event-driven communication between independent services.",
  //   stack: "Node.js · RabbitMQ · Sequelize · Docker",
  // },
  // {
  //   number: "05",
  //   title: "BakerHub: Bakery Order Management Platform",
  //   description:
  //     "An online bakery platform for browsing and ordering cakes, cookies, pastries, and other baked products.",
  //   stack: "Node.js · RabbitMQ · Sequelize · Docker",
  // },
];

function App() {
  return (

     <Routes>

      {/* Beyond Code page */}
      <Route
        path="/beyond-code"
        element={<BeyondCode />}
      />
      
      <Route
        path="/"
        element={ 
          <div className="min-h-screen bg-[#f8f9f8] text-[#0b1425] selection:bg-[#f59b18] selection:text-white">
          {/* Navigation */}
          <header className="fixed left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8">
          <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-black/[0.06] bg-white/70 px-5 py-3 shadow-[0_10px_35px_rgba(11,20,37,0.04)] backdrop-blur-xl">
          <a href="#" className="font-serif text-xl font-bold tracking-[-0.03em]">
            LD<span className="text-[#f59b18]">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
            <a className="transition hover:text-[#0b1425]" href="#about">About</a>
            <a className="transition hover:text-[#0b1425]" href="#experience">Experience</a>
            <a className="transition hover:text-[#0b1425]" href="#education">Education</a>
            <a className="transition hover:text-[#0b1425]" href="#projects">Projects</a>
            <a className="transition hover:text-[#0b1425]" href="#resume">Resume</a>
            <a className="transition hover:text-[#0b1425]" href="/beyond-code">Beyond Code</a>
            <a className="transition hover:text-[#0b1425]" href="#contact">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#0b1425] px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#17233a]"
          >
            Let's talk
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f59b18]/[0.055] blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto max-w-4xl text-center"
          >
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400 sm:text-xs">
              Full-Stack Developer · Creative Thinker
            </p>

            <h1 className="font-serif text-[4.3rem] font-medium leading-[0.83] tracking-[-0.065em] sm:text-[7rem] md:text-[8.4rem]">
              <span className="block text-[#f59b18]">Creative</span>
              <span className="block text-[#0b1425]">Developer</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-7 text-slate-500 sm:text-lg">
              Hi, I'm Lakshmi Devi R<br></br>
              I build clean, thoughtful digital experiences with a love for
              elegant interfaces, useful interactions and well-crafted code.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-[#0b1425] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0b1425]/10 transition hover:-translate-y-0.5 hover:bg-[#17233a]"
              >
                Contact me
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="rounded-full border border-black/[0.08] bg-white/60 px-7 py-3.5 text-sm font-semibold text-[#0b1425] transition hover:-translate-y-0.5 hover:border-black/[0.15] hover:bg-white"
              >
                View projects
              </a>
            </div>

            <a
              href="#about"
              className="absolute left-1/2 mt-20 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 sm:flex"
            >
              Scroll to explore <ArrowDown size={13} />
            </a>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-black/[0.06] px-6 py-28 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59b18]">
                01 — About
              </p>
              <h2 className="mt-4 font-serif text-5xl leading-none tracking-[-0.04em] sm:text-6xl">
                A little<br />about me.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-xl leading-9 text-slate-600 sm:text-2xl">
                I'm a Computer Science graduate who enjoys turning ideas into
                simple, polished web experiences.
              </p>
              <p className="mt-6 leading-7 text-slate-500">
                My work combines frontend development with the backend
                experience I've gained through projects involving APIs,
                databases, authentication, caching and microservices.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["JavaScript","React", "Tailwind CSS", "Node.js", "MySQL", "Git/GitHub"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/[0.07] bg-white px-4 py-2 text-xs font-semibold text-slate-600"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="px-6 py-28 sm:px-8">
        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59b18]">
              02 — Experience
            </p>

            <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                Experience
                <br />
                <span className="text-[#f59b18]">& journey.</span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-slate-500">
                A collection of my professional experiences, internships and
                opportunities that have shaped my journey as a developer.
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">

            {/* Vertical timeline line */}
            <div className="absolute left-[7px] top-2 hidden h-[calc(100%-20px)] w-px bg-black/[0.08] sm:block" />

            <div className="space-y-10">

              {/* Experience 01 */}
              <article className="group relative grid gap-6 sm:grid-cols-[110px_1fr]">

                {/* Year */}
                <div className="relative pl-7 sm:pl-8">
                  <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-[3px] border-[#f59b18] bg-[#f8f9f8] transition group-hover:bg-[#f59b18]" />

                  <p className="font-serif text-2xl text-[#f59b18]">
                    2026
                  </p>
                </div>

                {/* Experience Card */}
                <div className="rounded-[1.5rem] border border-black/[0.06] bg-white p-7 shadow-[0_12px_40px_rgba(11,20,37,0.035)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_50px_rgba(11,20,37,0.07)] sm:p-9">

                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Internship
                      </p>

                      <h3 className="mt-2 font-serif text-3xl tracking-[-0.025em] sm:text-4xl">
                        Software Developer Trainee(Backend)
                      </h3>

                      <p className="mt-2 text-sm font-medium text-[#f59b18]">
                        Apps Team Technologies Pvt. Ltd.
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-[#f1f1ee] px-4 py-2 text-xs font-semibold text-slate-500">
                      July 2026 - August 2026
                    </span>

                  </div>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500">
                    Worked on web application development with a focus on backend
                    technologies, REST APIs, databases and application development
                    workflows.
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "Express.js",
                      "MySQL",
                      "Sequelize",
                      "REST APIs",
                      "Git",
                      "Apache Cassandra",
                      "Apache Kafka"
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/[0.06] bg-[#f8f9f8] px-3 py-1.5 text-xs font-medium text-slate-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </article>


              {/* Experience 02 */}
              <article className="group relative grid gap-6 sm:grid-cols-[110px_1fr]">

                {/* Year */}
                <div className="relative pl-7 sm:pl-8">
                  <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-[3px] border-[#f59b18] bg-[#f8f9f8] transition group-hover:bg-[#f59b18]" />

                  <p className="font-serif text-2xl text-[#f59b18]">
                    2025
                  </p>
                </div>

                {/* Experience Card */}
                <div className="rounded-[1.5rem] border border-black/[0.06] bg-white p-7 shadow-[0_12px_40px_rgba(11,20,37,0.035)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_50px_rgba(11,20,37,0.07)] sm:p-9">

                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Internship
                      </p>

                      <h3 className="mt-2 font-serif text-3xl tracking-[-0.025em] sm:text-4xl">
                        Software Developer Intern
                      </h3>

                      <p className="mt-2 text-sm font-medium text-[#f59b18]">
                        Waves Electronics Pvt. Ltd.
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-[#f1f1ee] px-4 py-2 text-xs font-semibold text-slate-500">
                      December 2025 - March 2026 
                    </span>

                  </div>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500">
                    Designed and developed an employee portal (Waves Portal), including an admin dashboard and timesheet system improving employee workflow, tracking and accessibility. 
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "React",
                      "PostgreSQL",
                    ].map((item, index) => (
                      <span
                        key={`${item}-${index}`}
                        className="rounded-full border border-black/[0.06] bg-[#f8f9f8] px-3 py-1.5 text-xs font-medium text-slate-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </article>


              {/* Experience 03 */}
              <article className="group relative grid gap-6 sm:grid-cols-[110px_1fr]">

                {/* Year */}
                <div className="relative pl-7 sm:pl-8">
                  <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-[3px] border-[#f59b18] bg-[#f8f9f8] transition group-hover:bg-[#f59b18]" />

                  <p className="font-serif text-2xl text-[#f59b18]">
                    2025
                  </p>
                </div>

                {/* Experience Card */}
                <div className="rounded-[1.5rem] border border-black/[0.06] bg-white p-7 shadow-[0_12px_40px_rgba(11,20,37,0.035)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_50px_rgba(11,20,37,0.07)] sm:p-9">

                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Internship
                      </p>

                      <h3 className="mt-2 font-serif text-3xl tracking-[-0.025em] sm:text-4xl">
                        Flutter Mobile App Development Intern
                      </h3>

                      <p className="mt-2 text-sm font-medium text-[#f59b18]">
                        BEO Software Pvt. Ltd.
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-[#f1f1ee] px-4 py-2 text-xs font-semibold text-slate-500">
                      June 2025
                    </span>

                  </div>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500">
                    Gained hands-on experience in Flutter mobile application development, building UI components, implementing state management, and strengthening skills in cross-platform development and debugging.
                  </p>

                </div>
              </article>

            </div>
          </div>

        </div>
      </section>

      {/* Education */}
      <section id="education" className="px-6 py-28 sm:px-8">
        <div className="mx-auto max-w-6xl">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59b18]">
                03 — Education
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                Learning
                <br />
                <span className="text-[#f59b18]">by the years.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              My academic journey has given me a strong foundation in computer
              science, problem solving and technology.
            </p>
          </motion.div>


          {/* Main education card */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2rem] border border-black/[0.06] bg-[#0b1425] text-white shadow-[0_25px_70px_rgba(11,20,37,0.08)]"
          >

            <div className="grid md:grid-cols-[1fr_0.7fr]">

              {/* Degree information */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="p-8 sm:p-12"
              >

                <div className="flex items-start justify-between gap-5">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f59b18]">
                      Bachelor's Degree
                    </p>

                    <h3 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                      Computer Science
                      <br />
                      & Engineering
                    </h3>
                  </div>

                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="hidden font-serif text-5xl text-white/10 sm:block"
                  >
                    01
                  </motion.span>

                </div>


                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 border-t border-white/10 pt-7"
                >

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Institution
                  </p>

                  <p className="mt-2 text-lg text-slate-200">
                    College of Engineering Cherthala
                  </p>

                </motion.div>

              </motion.div>


              {/* CGPA panel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.025 }}
                className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-[#f59b18] p-8 text-[#0b1425] sm:p-12"
              >

                {/* Decorative circles */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[35px] border-[#0b1425]/[0.08]"
                />

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[-60px] right-[25%] h-40 w-40 rounded-full bg-white/10 blur-2xl"
                />

                <p className="relative text-xs font-bold uppercase tracking-[0.2em]">
                  Academic performance
                </p>

                <div className="relative mt-10">

                  {/* CGPA number */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="font-serif text-[5.5rem] leading-none tracking-[-0.07em] sm:text-[7rem]"
                  >
                    8.56
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-2 text-sm font-semibold uppercase tracking-[0.18em]"
                  >
                    CGPA / 10
                  </motion.p>

                </div>

              </motion.div>

            </div>


            {/* School education */}
            <div className="grid border-t border-white/10 sm:grid-cols-2">

              {/* 12th */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.035)" }}
                className="group border-b border-white/10 p-8 transition-colors sm:border-b-0 sm:border-r sm:p-10"
              >

                <div className="flex items-center justify-between">

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Higher Secondary
                  </p>

                  <span className="font-serif text-2xl text-[#f59b18] transition-transform duration-300 group-hover:scale-125">
                    02
                  </span>

                </div>

                <h3 className="mt-5 font-serif text-3xl">
                  12th Grade
                </h3>

                <div className="mt-6 flex items-end gap-2">

                  <span className="font-serif text-4xl text-white">
                    89.4%
                  </span>

                  <span className="mb-1 text-xs uppercase tracking-[0.15em] text-slate-500">
                    Percentage
                  </span>

                </div>

              </motion.div>


              {/* 10th */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.035)" }}
                className="group p-8 transition-colors sm:p-10"
              >

                <div className="flex items-center justify-between">

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Secondary Education
                  </p>

                  <span className="font-serif text-2xl text-[#f59b18] transition-transform duration-300 group-hover:scale-125">
                    03
                  </span>

                </div>

                <h3 className="mt-5 font-serif text-3xl">
                  10th Grade
                </h3>

                <div className="mt-6 flex items-end gap-2">

                  <span className="font-serif text-4xl text-white">
                    91.6%
                  </span>

                  <span className="mb-1 text-xs uppercase tracking-[0.15em] text-slate-500">
                    Percentage
                  </span>

                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>
      
        {/* Projects */}
        <section id="projects" className="bg-[#0b1425] px-6 py-28 text-white sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59b18]">
                  02 — Selected work
                </p>
                <h2 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-6xl">
                  Things I've built.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-slate-400">
                A few projects that represent my journey across frontend and backend development.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {projects.map((project) => (
                <motion.article
                  key={project.number}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="group grid gap-5 py-9 md:grid-cols-[70px_1fr_1fr] md:items-center"
                >
                  <span className="font-serif text-lg text-[#f59b18]">{project.number}</span>
                  <div>
                    <h3 className="font-serif text-3xl tracking-[-0.02em] sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>
                  </div>
                  <div className="md:justify-self-stretch md:pt-1 md:pl-60">
                  <p className="text-xs font-medium text-slate-500">{project.stack}</p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-[#f59b18]"
                  >
                  View project <ArrowRight size={15} />
                  </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className="px-6 py-28 sm:px-8">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-white px-7 py-14 shadow-[0_20px_60px_rgba(11,20,37,0.05)] sm:px-12">

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59b18]">
                  05 — Resume
                </p>

                <h2 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-6xl">
                  More about<br />my journey.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                  For a detailed overview of my skills, education, experience
                  and projects, take a look at my resume.
                </p>

              </div>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0b1425] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#17233a]"
              >
                View Resume
              </a>

            </div>

          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-28 sm:px-8">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#f1f1ee] px-7 py-16 text-center sm:px-12 sm:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f59b18]">
              03 — Contact
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              Have an idea?
              <span className="block text-[#f59b18]">Let's make it real.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-500">
              I'm open to opportunities, collaborations and interesting projects.
              Drop me a message and let's connect.
            </p>

            <a
              href="mailto:your.email@example.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b1425] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#17233a]"
            >
              <Mail size={16} />lakshmir.devi.2004@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-slate-400">© 2026 Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/CodeLachu" aria-label="GitHub" className="text-slate-400 transition hover:text-[#0b1425]">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/lakshmi-devi-r-b0a40b255/" aria-label="LinkedIn" className="text-slate-400 transition hover:text-[#0b1425]">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
        }
        />
        </Routes>
  );
}

export default App;