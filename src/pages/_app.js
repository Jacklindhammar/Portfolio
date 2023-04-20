import '@/styles/globals.css'
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
  <div className="bg-slate-900">
  <ul className="flex gap-2 px-5 py-5 text-xl">
    <li>
  <Link  className=' text-white hover:underline' href="/">Home</Link>
  </li>
  <li>
  <Link className=' text-white hover:underline' href="/about">About</Link>
  </li>
  <li>
  <Link className=' text-white hover:underline' href="/portfolio">Portfolio</Link>
  </li>
  <li>
  <Link className=' text-white hover:underline' href="/contact">Contact</Link>
  </li>
  </ul>
  <Component {...pageProps} />
  </div>
  );
}
