import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Portfolio() {

    return(
        <main className='flex flex-col min-h-screen p-24'>
        <div className="">

            <h2 className={`${inter.className} py-5 text-6xl text-white`}>Portfolio</h2>
            
        </div>
        <div className='flex flex-row py-10 gap-10'>
            <h3 className={`${inter.className} text-2xl text-white`}>Resume:</h3>
            <a className='text-white text-2xl hover:underline' href="https://cv-sida-del-2.vercel.app/" target="_blank">My Resume</a>
        </div>

        <div className='flex flex-row gap-10'>
            <h3 className={`${inter.className} text-2xl text-white`}>Zoom re-design:</h3>
            <a className='text-white text-2xl hover:underline' href="https://zoom-redesign-beta.vercel.app/" target="_blank">Zoom</a>
        </div>

        <div className='flex flex-row gap-10 py-10'>
            <h3 className={`${inter.className} text-2xl text-white`}>Component library:</h3>
            <a className='text-white text-2xl hover:underline' href="https://react-components-topaz-eta.vercel.app/" target="_blank">Components with React</a>
        </div>

        </main>

    )

}