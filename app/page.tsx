import { CarouselPlugin } from "./ShadCarousel";
export default function Home() {
  return (
    <>
      {/* Fullscreen video + title card */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          src="/Videos/Data_Center.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="title-card text-white p-4 rounded text-center font-orbitron bg-[#322E94]/90 flex w-screen flex-col">
            <div>
              <strong className="text-2xl sm:text-4xl md:text-5xl block">
                Bruno Oros
              </strong>
              <span className="text-xl sm:text-2xl md:text-3xl">
                Software Engineer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content section below */}
      <section className="min-h-screen bg-black text-white p-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          I’m Bruno — a software engineer and Penn graduate who transitioned
          from biomedical science to computer science. I build full-stack,
          backend, frontend, and data-focused projects with a strong emphasis on
          clean architecture and practical solutions.
        </p>
      </section>

      <section className=" bg-gray-900 text-white p-8">
        <h2>Current/Completed projects</h2>
        <CarouselPlugin></CarouselPlugin>
      </section>
      <footer className="bg-black text-white p-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:boros@alumni.upenn.edu"
                className="underline hover:text-indigo-400"
              >
                boros@alumni.upenn.edu
              </a>
            </p>
            <p>Location: US</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Socials</h3>
            <div className="flex gap-4 justify-center sm:justify-start mt-2">
              <a
                href="https://github.com/Vourpal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/send._flowers/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    </>
  );
}
