import { Inter } from 'next/font/google'
import { AiFillHtml5 } from "react-icons/Ai";
import { DiCss3 } from "react-icons/Di";
import { IoLogoJavascript } from "react-icons/Io";
import { GrReactjs } from "react-icons/Gr";
import { AiFillGithub } from "react-icons/Ai";
import { SiVisualstudiocode } from "react-icons/Si";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen p-24'>
      <div className="flex flex-col">
        <h1 className={`${inter.className} text-6xl text-white`}>Hello, my name is Jack</h1>
        <h2 className={`${inter.className} py-5 text-2xl text-white`}>I'm studying to become a front-end developer.</h2>
      </div>
      <div className="flex py-10">
        <h4 className={`${inter.className} text-lg text-white`}>Technologies i've been working with:</h4>
      </div>
      <div className="flex flex-row gap-5">
      
        <AiFillHtml5 size={70} style={{ fill: 'orange' }}/>
        <DiCss3 size={70} style={{ fill: 'lightblue' }}/>
        <IoLogoJavascript size={70} style={{ fill: 'yellow' }}/>
        <GrReactjs size={70} style={{ fill: 'cyan' }}/>
        <AiFillGithub size={70} style={{ fill: 'white' }}/>
        <SiVisualstudiocode size={70} style={{ fill: 'blue' }}/>
       
      
      </div>
    </main>
  )
}
