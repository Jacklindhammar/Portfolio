import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {

    return(
        <main className='flex flex-col min-h-screen p-24'>
        <div className="">

            <h2 className={`${inter.className} py-5 text-6xl text-white`}>Contact:</h2>
            
        </div>
        <div className='flex flex-row py-10 gap-10'>
            <h3 className={`${inter.className} text-2xl text-white`}>Email:</h3>
            <a className='text-white text-2xl hover:underline' href="mailto:jacklindhammar94@gmail.com">jacklindhammar94@gmail.com</a>
        </div>

        </main>

    )

}