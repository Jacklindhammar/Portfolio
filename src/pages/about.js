import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {

    return(

        <div className="flex min-h-screen p-24">
            <p className={`${inter.className} text-xl text-white`}>Hey, my name is Jack Lindhammar. I am from a small town up in the north
            of Sweden. I am currently living in Stockholm where im studying to become a front-end developer, I enjoy designing and building
            interesting and intriguing websites and mobile applications. I am also a music producer. If you have any further questions, feel
            free to contact me. Thanks for stopping by.
            </p>
        </div>

    )

}