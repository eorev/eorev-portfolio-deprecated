"use client";

const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden bg-slate-900 px-8 py-24 md:px-12 md:py-32">
      <div className="relative mx-auto max-w-5xl">
        <div className="pointer-events-none relative z-10">
          <h1 className="pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl">
            Hi, I&#39;m Ethan<span className="text-indigo-500">.</span>
          </h1>
          <h2 className="pointer-events-auto my-2 text-2xl text-slate-400 md:my-4 md:text-4xl">
            I&#39;m a{" "}
            <span className="font-semibold text-indigo-500">
              Aspiring Software Engineer
            </span>
          </h2>
          <p className="pointer-events-auto max-w-xl text-sm text-slate-300 md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            tenetur exercitationem neque quibusdam sed qui et ullam, ducimus
            iure quas corporis quaerat culpa fuga quos, dolore, nemo nihil
            soluta quo.
          </p>
          <button className="pointer-events-auto mt-4 rounded bg-indigo-600 px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-700 active:scale-95 md:mt-6">
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;