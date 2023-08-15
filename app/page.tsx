import Image from 'next/image'
import dynamic from 'next/dynamic';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="flex items-center justify-center">
        <li className="flex items-center justify-center">
          <h1>filler</h1>
        </li>
        <li className="flex items-center justify-center ml-6">
          <h1>filler</h1>
        </li>
      </ul>
      <header>
        <h1 className="text-6xl font-bold text-center">Welcome to my website!</h1>
        <h2 className="text-4xl font-bold text-center">I&#39;m a software engineer and I love to build things.</h2>
        <h3 className="text-2xl font-bold text-center">I&#39;m currently working on a new website, so this one is a bit empty.</h3>
      </header>
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
  )
}
