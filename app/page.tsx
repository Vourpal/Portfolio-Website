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
          <div className="title-card text-white py-8 px-4 rounded text-center font-orbitron bg-[#322E94]/95 flex w-screen flex-col">
            <div>
              <strong className="text-2xl sm:text-8xl md:text-10xl block">
                Bruno Oros
              </strong>
              <span className="text-xl sm:text-4xl md:text-6xl">
                Software Engineer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content section below */}
      <section className="min-h-screen lg:min-h-[50vh] bg-black text-white p-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          I’m Bruno — a premed student turned software engineer after completing
          my Master’s in Computer and Information Technology at the University
          of Pennsylvania. My background in biomedical science taught me to
          think in systems, which now fuels my approach to building scalable,
          user-focused applications.
        </p>
        <p className="mb-4">
          I specialize in full-stack development using React.js, Next.js,
          Node.js, and MongoDB, and I’m equally comfortable working with Python,
          SQL, and REST APIs. I’ve built and deployed projects across cloud
          platforms like Azure and AWS, and I enjoy integrating data pipelines,
          LLMs, and interactive dashboards.
        </p>
        <p>
          I’m actively seeking opportunities where I can contribute to impactful
          software, collaborate with thoughtful teams, and continue exploring
          the intersection of AI, UX, and full-stack engineering. Whether
          remote, hybrid, or abroad, I’m excited to grow and build systems that
          serve real people.
        </p>
      </section>

      <section className="bg-gray-900 text-white px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-wide">
            Current & Completed Projects
          </h2>
          <div className="mt-4">
            <CarouselPlugin />
          </div>
        </div>
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
