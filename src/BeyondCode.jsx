import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Music2,
  CakeSlice,
  Compass,
} from "lucide-react";

export default function BeyondCode() {
  return (
    <main className="min-h-screen bg-[#f8f9f8] text-[#0b1425]">

      {/* NAVIGATION */}
      <nav className="fixed left-1/2 top-5 z-50 flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-black/[0.06] bg-white/85 px-5 py-3 shadow-[0_10px_35px_rgba(11,20,37,0.06)] backdrop-blur-md sm:px-6">

        <a
          href="/"
          className="font-serif text-xl font-semibold tracking-tight"
        >
          LD.
        </a>

        <a
          href="/"
          className="group flex items-center gap-2 text-sm font-medium text-[#0b1425]/70 transition hover:text-[#0b1425]"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to portfolio
        </a>

      </nav>


      {/* HERO */}
      <section className="px-6 pb-20 pt-40 sm:px-8 sm:pt-44">

        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f59b18]">
              Beyond Code
            </p>

            <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              The things that
              <span className="text-[#f59b18]"> make me, me.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#0b1425]/60">
              There is more to me than code, projects and technology.
              I find joy in music, creativity, beautiful little details,
              and discovering places beyond the familiar.
            </p>

          </motion.div>


          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mt-16 h-px bg-[#0b1425]/10"
          />

        </div>

      </section>


      {/* INTERESTS */}
      <section className="px-6 pb-32 sm:px-8">

        <div className="mx-auto max-w-6xl space-y-10">


          {/* SINGING */}
          <motion.article
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group overflow-hidden rounded-[2rem] bg-[#0b1425] text-white"
          >

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

              <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden p-8 sm:p-12">

                {/* Decorative circles */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.08]" />
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/[0.08]" />

                <div className="relative z-10">

                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#f59b18] text-[#0b1425]">
                    <Music2 size={21} />
                  </div>

                  <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                    01 — Music
                  </p>

                  <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
                    Classical
                    <br />
                    singing.
                  </h2>

                </div>

                <p className="relative z-10 max-w-md text-sm leading-7 text-white/55">
                  Music has always been one of the spaces where I feel most
                  connected to myself. Classical singing lets me slow down,
                  listen closely and express emotions that words sometimes
                  cannot.
                </p>

              </div>


              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#f59b18] p-8 text-[#0b1425]">

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-72 w-72 rounded-full border border-[#0b1425]/10"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-48 w-48 rounded-full border border-[#0b1425]/10"
                />

                <div className="relative z-10 text-center">

                  <Music2
                    size={90}
                    strokeWidth={1}
                    className="mx-auto mb-6 opacity-20"
                  />

                  <p className="font-serif text-3xl italic sm:text-4xl">
                    “Where words end,
                    <br />
                    music begins.”
                  </p>

                </div>

              </div>

            </div>

          </motion.article>


          {/* BAKING */}
          <motion.article
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white"
          >

            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

              <div className="order-2 flex min-h-[420px] flex-col justify-between p-8 sm:p-12 lg:order-1">

                <div>

                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b1425] text-white">
                    <CakeSlice size={21} />
                  </div>

                  <p className="text-sm uppercase tracking-[0.2em] text-[#f59b18]">
                    02 — Creativity
                  </p>

                  <h2 className="mt-4 font-serif text-4xl font-semibold text-[#0b1425] sm:text-5xl">
                    Baking
                    <br />
                    beautiful things.
                  </h2>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-[#0b1425]/55">
                    I love turning simple ingredients into something that
                    looks beautiful and tastes even better. Cakes, cookies,
                    little details and a lot of patience — baking is one of
                    my favourite ways to be creative.
                  </p>

                </div>

                <div className="mt-10 flex items-center gap-3 text-sm font-semibold">
                  <span className="h-2 w-2 rounded-full bg-[#f59b18]" />
                  Creating something from scratch
                </div>

              </div>


              <div className="order-1 flex min-h-[420px] items-center justify-center overflow-hidden bg-[#f1eee8] p-8 lg:order-2">

                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full max-w-sm"
                >

                  <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border-2 border-[#f59b18]/40" />

                  <div className="relative rounded-[2rem] bg-white p-10 text-center shadow-[0_25px_60px_rgba(11,20,37,0.08)]">

                    <CakeSlice
                      size={75}
                      strokeWidth={1}
                      className="mx-auto text-[#f59b18]"
                    />

                    <p className="mt-7 font-serif text-3xl">
                      Made with
                      <br />
                      patience & love.
                    </p>

                    <div className="mx-auto mt-6 h-px w-16 bg-[#0b1425]/10" />

                    <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#0b1425]/40">
                      Cakes · Cookies · Creativity
                    </p>

                  </div>

                </motion.div>

              </div>

            </div>

          </motion.article>


          {/* TRAVEL */}
          <motion.article
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="overflow-hidden rounded-[2rem] bg-[#f59b18] text-[#0b1425]"
          >

            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

              <div className="flex min-h-[420px] flex-col justify-between p-8 sm:p-12">

                <div>

                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b1425] text-white">
                    <Compass size={21} />
                  </div>

                  <p className="text-sm uppercase tracking-[0.2em] text-[#0b1425]/50">
                    03 — Exploration
                  </p>

                  <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
                    Somewhere
                    <br />
                    new.
                  </h2>

                </div>

                <p className="max-w-md text-sm leading-7 text-[#0b1425]/60">
                  Travelling gives me the chance to step outside my routine,
                  experience different places and collect memories along the
                  way. I love discovering new corners, trying new things and
                  simply seeing where the road leads.
                </p>

              </div>


              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#0b1425] text-white">

                {/* Map-style decoration */}
                <div className="absolute inset-0 opacity-10">

                  <div className="absolute left-[15%] top-[20%] h-40 w-40 rounded-full border border-white" />

                  <div className="absolute right-[15%] top-[30%] h-56 w-56 rounded-full border border-white" />

                  <div className="absolute bottom-[10%] left-[35%] h-32 w-32 rounded-full border border-white" />

                </div>

                <motion.div
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex flex-col items-center text-center"
                >

                  <MapPin
                    size={90}
                    strokeWidth={1}
                    className="text-[#f59b18]"
                  />

                  <p className="mt-6 font-serif text-3xl sm:text-4xl">
                    Explore.
                    <br />
                    Discover.
                    <br />
                    Remember.
                  </p>

                </motion.div>

              </div>

            </div>

          </motion.article>

        </div>

      </section>


      {/* CLOSING */}
      <section className="px-6 pb-32 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f59b18]">
            And that's the other side of me
          </p>

          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            A little music.
            <br />
            A little sweetness.
            <br />
            <span className="text-[#f59b18]">A lot of curiosity.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#0b1425]/55">
            These are the things that keep me curious, creative and
            connected outside the world of technology.
          </p>

          <a
            href="/"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#0b1425] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            Back to my portfolio

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </motion.div>

      </section>

    </main>
  );
}