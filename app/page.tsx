import Image from "next/image";
import dynamic from "next/dynamic";
import Projects from "../components/Projects";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
      <Hero />
      <Projects />
      <footer className="flex items-center justify-center">
        <ul className="flex items-center justify-center">
          <li className="flex items-center justify-center">
            <h1>filler</h1>
          </li>
          <li className="flex items-center justify-center ml-6">
            <h1>filler</h1>
          </li>
        </ul>
      </footer>
    </main>
  );
}
